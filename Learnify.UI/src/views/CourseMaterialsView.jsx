import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Download } from "lucide-react";
import PropTypes from 'prop-types';
import { getAllCourseModules } from "../services/ModuleService";
import { getLessonsByCourseId } from "../services/LessonService";

function CourseMaterialsContent(props) {
    const { courseId, userRole } = props;
    const [materials, setMaterials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const isAdmin = userRole === 'admin';

    useEffect(() => {
        const fetchMaterials = async () => {
            try {
                setLoading(true);
                const [moduleData, lessonData] = await Promise.all([
                    getAllCourseModules(courseId),
                    getLessonsByCourseId(courseId)
                ]);

                const formattedMaterials = [
                    ...moduleData.map(module => ({
                        name: module.title,
                        format: 'Module',
                        link: `/module/${module.id}`
                    })),
                    ...lessonData.map(lesson => ({
                        name: lesson.title,
                        format: 'Lesson',
                        link: `/lesson/${lesson.id}`
                    }))
                ];
                
                setMaterials(formattedMaterials);
            } catch (error) {
                console.error('Error fetching course materials:', error);
                setError('Failed to load course materials. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        if (courseId) {
            fetchMaterials();
        }
    }, [courseId]);

    if (loading) return <div>Loading materials...</div>;
    if (error) return <div className="text-red-500">{error}</div>;

    return (
        <div className="mt-2 w-full">
            {isAdmin && (
                <button className="mt-0 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md">
                    Add Material
                </button>
            )}
            <h2 className="mt-3 text-xl font-semibold mb-6">Materials</h2>
            <div className="space-y-4">
                {materials.length > 0 ? (
                    materials.map((material, index) => (
                        <div key={index} className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition">
                            <div>
                                <h3 className="text-md font-semibold text-gray-800">{material.name}</h3>
                                <p className="text-sm text-gray-500">{material.format}</p>
                            </div>
                            <a
                                href={material.link}
                                download={material.format !== 'Module' && material.format !== 'Lesson'}
                                className="flex items-center gap-2 px-3 py-1.5 text-sm text-white bg-blue-500 hover:bg-blue-600 rounded-md"
                            >
                                <Download size={16} />
                                {material.format === 'Module' || material.format === 'Lesson' ? 'View' : 'Download'}
                            </a>
                        </div>
                    ))
                ) : (
                    <p>No materials available for this course yet.</p>
                )}
            </div>
        </div>
    );
}

CourseMaterialsContent.propTypes = {
    courseId: PropTypes.string.isRequired,
    userRole: PropTypes.string
};

export default function CourseMaterialsView() {
    const { courseId, userRole } = useOutletContext();
    return <CourseMaterialsContent courseId={courseId} userRole={userRole} />;
}
