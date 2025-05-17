import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from '../assets/Logo.png';
import { getCourses } from "../services/ApiService";

function CoursesPage() {
    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [debugInfo, setDebugInfo] = useState('');

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                setLoading(true);
                setDebugInfo('Calling getCourses...');
                
                const data = await getCourses();
                setDebugInfo(prev => prev + '\nData received: ' + JSON.stringify(data));
                
                if (!data) {
                    setDebugInfo(prev => prev + '\nNo data returned from API');
                    setError('No courses data returned from API');
                } else if (!Array.isArray(data)) {
                    setDebugInfo(prev => prev + '\nData is not an array: ' + typeof data);
                    setError('Invalid courses data format');
                } else {
                    setDebugInfo(prev => prev + '\nSetting courses with ' + data.length + ' items');
                    setCourses(data);
                }
            } catch (err) {
                const errorMsg = err?.message || 'Unknown error';
                console.error("Error fetching courses:", err);
                setDebugInfo(prev => prev + '\nError: ' + errorMsg);
                setError(`Failed to load courses: ${errorMsg}`);
            } finally {
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    const getImagePath = (imagePath) => {
        if (imagePath && (imagePath.startsWith('http') || imagePath.startsWith('/'))) {
            return imagePath;
        }
        return '/courses.png';
    };

    const handleCourseClick = (course) => {
        console.log('Navigating to course:', course);
        navigate(`/course/${course.id}`);
    };

    return (
        <div className="min-h-screen bg-white px-8 py-10">
            <div className="flex justify-between items-center mb-8">
                <div className="flex items-center space-x-2">
                    <img src={Logo} alt="Learnify Logo" className="h-10" />
                    <h1 className="text-2xl font-bold text-blue-700">Learnify</h1>
                </div>
                <p className="text-lg font-semibold text-blue-700">Hello, User!</p>
            </div>

            <div className="flex space-x-6 text-xl mb-6 ml-2">
                <span 
                    className="text-gray-700 hover:underline cursor-pointer"
                    onClick={() => navigate('/dashboard')}
                >
                    Home
                </span>
                <span className="text-black font-bold border-b-2 border-black">Courses</span>
            </div>

            <h2 className="text-4xl font-extrabold text-blue-900 mb-10 ml-2">Pick a course!</h2>

            {loading && (
                <div className="flex justify-center items-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
            )}

            {error && (
                <div className="text-center py-20">
                    <p className="text-red-500 text-lg">{error}</p>
                    <pre className="mt-4 text-left bg-gray-100 p-4 rounded text-sm overflow-auto max-w-2xl mx-auto">
                        {debugInfo}
                    </pre>
                    <button 
                        onClick={() => window.location.reload()}
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Try Again
                    </button>
                </div>
            )}

            {!loading && !error && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
                    {courses.length > 0 ? (
                        courses.map((course) => (
                            <div
                                key={course.id}
                                onClick={() => handleCourseClick(course)}
                                className="cursor-pointer w-64 h-64 rounded-3xl shadow-md hover:shadow-xl transition-transform transform hover:scale-105 relative overflow-hidden"
                            >
                                <img
                                    src={getImagePath(course.image)}
                                    alt={course.title}
                                    className="w-full h-full object-cover rounded-3xl"
                                />
                                <div className="absolute bottom-4 left-4 text-white text-2xl font-bold drop-shadow-lg bg-black bg-opacity-30 px-2 py-1 rounded">
                                    {course.title}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-3 text-center py-10">
                            <p className="text-gray-500 text-lg">No courses available.</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default CoursesPage;
