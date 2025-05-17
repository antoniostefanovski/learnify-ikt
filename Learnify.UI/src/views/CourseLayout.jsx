import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getCourseById } from '../services/CourseService';
import { AuthService } from '../services/AuthService';

export default function CourseLayout() {
    const location = useLocation();
    const { id } = useParams();
    const [course, setCourse] = useState(null);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchCourseAndUser = async () => {
            try {
                setLoading(true);
                setError(null);

                if (id) {
                    const courseData = await getCourseById(id);
                    setCourse(courseData);
                }

                const currentUser = await AuthService.getCurrentUser();
                setUser(currentUser);
            } catch (error) {
                console.error('Error loading data:', error);
                setError('Failed to load course or user data. Please try again later.');
            } finally {
                setLoading(false);
            }
        };
        
        fetchCourseAndUser();
    }, [id]);

    return (
        <div className="min-h-screen w-screen bg-gray-100 p-6 font-sans">
            <header className="flex items-center justify-between bg-white p-1 rounded-lg shadow-md">
                <img src="/logo1.png" alt="Learnify Logo" className="max-w-sm max-h-sm" />
                <span className="text-gray-500 text-xl font-bold">
                    {loading ? 'Loading...' : `Hello, ${user?.name || 'User'}!`}
                </span>
            </header>

            <nav className="flex gap-6 mt-6">
                {["Home", "Courses", "Leaderboard"].map((item) => {
                    const path = item.toLowerCase();
                    return (
                        <Link
                            key={item}
                            to={`/${path}`}
                            className={`py-2 px-4 rounded-md font-medium ${location.pathname === `/${path}` ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-200"}`}
                        >
                            {item}
                        </Link>
                    );
                })}
            </nav>

            {error && (
                <div className="mt-6 p-4 bg-red-100 text-red-700 rounded-md">
                    {error}
                </div>
            )}

            <section className="mt-10">
                <h1 className="text-4xl font-bold text-gray-800">
                    {loading ? 'Loading...' : course?.title || 'Course Details'}
                </h1>
            </section>

            <nav className="flex gap-6 mt-4">
                {["description", "materials", "reviews"].map((tab) => (
                    <Link
                        key={tab}
                        to={tab}
                        className={`py-2 px-4 rounded-md ${location.pathname.endsWith(tab) || (tab === "description" && location.pathname.endsWith(id)) ? "bg-blue-500 text-white" : "text-gray-600 hover:bg-gray-200"}`}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </Link>
                ))}
            </nav>

            <div className="mt-8 w-full bg-white p-6 rounded-xl shadow-md text-gray-700">
                <Outlet context={{ courseId: id, userRole: user?.role }} />
            </div>
        </div>
    );
}
