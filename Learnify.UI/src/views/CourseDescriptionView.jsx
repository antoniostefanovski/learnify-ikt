import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getCourseById } from '../services/CourseService';

function CourseDescriptionContent(props) {
    const { courseId } = props;
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCourseDescription = async () => {
            try {
                setLoading(true);
                const courseData = await getCourseById(courseId);
                setCourse(courseData);
            } catch (error) {
                console.error('Error fetching course description:', error);
                setError('Failed to load course description. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        if (courseId) {
            fetchCourseDescription();
        }
    }, [courseId]);

    if (loading) return <div>Loading course details...</div>;
    if (error) return <div className="text-red-500">{error}</div>;
    if (!course) return <div>No course information available.</div>;

    return (
        <div className="bg-[url('/background_.png')] bg-cover bg-center bg-no-repeat p-6 rounded-xl shadow-md">
            <p className="max-w-xl mb-6">{course.description}</p>
            <h2 className="text-xl font-semibold mb-2">What will you learn?</h2>
            <ul className="list-disc list-inside space-y-1">
                {course.topics && course.topics.map((topic, idx) => (
                    <li key={idx}>{topic}</li>
                ))}
            </ul>
        </div>
    );
}

CourseDescriptionContent.propTypes = {
    courseId: PropTypes.string.isRequired
};

export default function CourseDescriptionView() {
    const { courseId } = useOutletContext();
    return <CourseDescriptionContent courseId={courseId} />;
}
