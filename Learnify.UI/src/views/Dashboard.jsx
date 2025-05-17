import Sidebar from '../components/Sidebar';
import Filters from '../components/Filters';
import CourseCard from '../components/CourseCard';
import RightPanel from '../components/RightPanel';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getAllCourses } from '../services/CourseService';
import { Link } from 'react-router-dom';

function DashboardContent(props) {
    const { } = props;
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                setLoading(true);
                const coursesData = await getAllCourses();
                setCourses(coursesData);
            } catch (error) {
                console.error('Error fetching courses:', error);
                setError('Failed to load courses. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 p-6 bg-white">
                <Filters />
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-blue-800">Your courses</h2>
                    <Link 
                        to="/add-course" 
                        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
                    >
                        Add New Course
                    </Link>
                </div>
                
                {loading && <p>Loading courses...</p>}
                {error && <p className="text-red-500">{error}</p>}
                
                {!loading && !error && (
                    <div className="flex flex-col gap-4">
                        {courses.length > 0 ? (
                            courses.map(course => (
                                <div key={course.id} className="relative">
                                    <CourseCard
                                        id={course.id}
                                        title={course.title}
                                        description={course.description}
                                    />
                                    <Link 
                                        to={`/edit-course/${course.id}`}
                                        className="absolute top-4 right-4 px-3 py-1 bg-blue-100 text-blue-700 hover:bg-blue-200 rounded-md text-sm"
                                    >
                                        Edit
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <p>No courses available.</p>
                        )}

                        <div className="mt-8 border-t pt-4">
                            <h3 className="text-lg font-semibold mb-4">Test Courses (Mock Data)</h3>
                            <div className="flex flex-col gap-4">
                                <div className="bg-blue-100 p-6 rounded-2xl flex items-center justify-between shadow-md relative">
                                    <div>
                                        <h3 className="text-xl font-bold text-blue-800">Data Science</h3>
                                        <p className="text-sm text-gray-700">Data science courses teach an interdisciplinary field focused on extracting knowledge and insights from data.</p>
                                    </div>
                                    <Link 
                                        to="/edit-course/1"
                                        className="px-4 py-2 bg-blue-500 text-white rounded-md"
                                    >
                                        Edit Course
                                    </Link>
                                </div>
                                
                                <div className="bg-blue-100 p-6 rounded-2xl flex items-center justify-between shadow-md relative">
                                    <div>
                                        <h3 className="text-xl font-bold text-blue-800">Operating Systems</h3>
                                        <p className="text-sm text-gray-700">Learn the basic operating system abstraction, mechanisms and their implementations.</p>
                                    </div>
                                    <Link 
                                        to="/edit-course/2"
                                        className="px-4 py-2 bg-blue-500 text-white rounded-md"
                                    >
                                        Edit Course
                                    </Link>
                                </div>
                                
                                <div className="bg-blue-100 p-6 rounded-2xl flex items-center justify-between shadow-md relative">
                                    <div>
                                        <h3 className="text-xl font-bold text-blue-800">Web Development</h3>
                                        <p className="text-sm text-gray-700">Learn to build modern web applications using HTML, CSS, JavaScript, and popular frameworks.</p>
                                    </div>
                                    <Link 
                                        to="/edit-course/3"
                                        className="px-4 py-2 bg-blue-500 text-white rounded-md"
                                    >
                                        Edit Course
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <RightPanel />
        </div>
    );
}

DashboardContent.propTypes = {
};

export default function Dashboard() {
    return <DashboardContent />;
}
