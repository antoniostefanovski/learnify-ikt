import React, { useState, useEffect } from "react";
import { Link, useLocation, Outlet, useParams, useOutletContext } from "react-router-dom";
import { Star, StarOff, Download } from "lucide-react";
import { getCourseById, getCourseReviews } from "../services/ApiService";
import { downloadCertificate } from "../services/CertificateService";

export default function CoursePage() {
    const location = useLocation();
    const { id } = useParams();
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                setLoading(true);
                const data = await getCourseById(id);
                console.log("Fetched course:", data);
                if (data) {
                    setCourse(data);
                } else {
                    setError("Course not found");
                }
            } catch (err) {
                console.error("Error fetching course:", err);
                setError("Failed to load course data");
            } finally {
                setLoading(false);
            }
        };

        fetchCourse();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen w-screen bg-gray-100 p-6 font-sans flex justify-center items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen w-screen bg-gray-100 p-6 font-sans flex justify-center items-center">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <h2 className="text-xl font-bold text-red-500 mb-4">{error}</h2>
                    <Link to="/courses" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                        Back to Courses
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen w-screen bg-gray-100 p-6 font-sans">
            <header className="flex items-center justify-between bg-white p-1 rounded-lg shadow-md">
                <div className="flex items-center space-x-4">
                    <img src="/logo1.png" alt="Learnify Logo" className="max-w-sm max-h-sm" />
                </div>
                <span className="text-gray-500 text-xl font-bold">Hello, User!</span>
            </header>

            <nav className="flex gap-6 mt-6">
                <Link
                    to="/"
                    className={`py-2 px-4 rounded-md font-medium ${location.pathname === "/" ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-200"
                        }`}
                >
                    Home
                </Link>
                <Link
                    to="/courses"
                    className={`py-2 px-4 rounded-md font-medium ${location.pathname === "/courses" ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-200"
                        }`}
                >
                    Courses
                </Link>
                <Link
                    to="/leaderboard"
                    className={`py-2 px-4 rounded-md font-medium ${location.pathname === "/leaderboard" ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-200"
                        }`}
                >
                    Leaderboard
                </Link>
            </nav>

            <section className="mt-10">
                <h1 className="text-4xl font-bold text-gray-800">{course.title}</h1>
            </section>

            <nav className="flex gap-6 mt-4">
                <Link
                    to="description"
                    className={`py-2 px-4 rounded-md ${location.pathname.endsWith("description") || location.pathname.endsWith(id) ? "bg-blue-500 text-white" : "text-gray-600 hover:bg-gray-200"
                        }`}
                >
                    Description
                </Link>
                <Link
                    to="materials"
                    className={`py-2 px-4 rounded-md ${location.pathname.endsWith("materials") ? "bg-blue-500 text-white" : "text-gray-600 hover:bg-gray-200"
                        }`}
                >
                    Materials
                </Link>
                <Link
                    to="reviews"
                    className={`py-2 px-4 rounded-md ${location.pathname.endsWith("reviews") ? "bg-blue-500 text-white" : "text-gray-600 hover:bg-gray-200"
                        }`}
                >
                    Reviews
                </Link>
                <Link
                    to="quiz"
                    className={`py-2 px-4 rounded-md ${location.pathname.endsWith("quiz") ? "bg-blue-500 text-white" : "text-gray-600 hover:bg-gray-200"
                        }`}
                >
                    Quiz
                </Link>
            </nav>

            <div className="mt-8 w-full bg-white p-6 rounded-xl shadow-md text-gray-700">
                <Outlet context={{ course }} />
            </div>
            
        </div>
    );
}

export function Description() {
    const { course } = useOutletContext();

    const handleDownloadCertificate = async () => {
        downloadCertificate(course.id);
    }

    return (
        <>
            <div className="bg-[url('/background_.png')] bg-cover bg-center bg-no-repeat p-6 rounded-xl shadow-md">
                <div className="mt-2 w-full">
                    <p className="max-w-xl mb-6">
                        {course.description}
                    </p>
                    <h2 className="text-xl font-semibold mb-2">What will you learn?</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Programming for Data Science</li>
                        <li>Statistics and Probability</li>
                        <li>Data Visualization</li>
                        <li>Machine Learning</li>
                        <li>Big Data Technologies and Tools</li>
                    </ul>
                    <br></br><br></br><br></br><br></br>
                    <div className="download-course-container">
                        <button onClick={handleDownloadCertificate}>
                            Симни сертификат
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export function Materials() {
    const { course } = useOutletContext();
    const isAdmin = true;

    const getMaterialUrl = (url) => {
        if (url && (url.startsWith('http') || url.startsWith('/'))) {
            return url;
        }
        return '#';
    };

    return (
        <div className="mt-2 w-full">
            {isAdmin && (
                <button
                    className="mt-0 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md"
                    onClick={() => console.log("Add Material Clicked")}
                >
                    Add Material
                </button>
            )}

            <h2 className="mt-3 text-xl font-semibold mb-6">Materials</h2>
            {course.materials && course.materials.length > 0 ? (
                <div className="space-y-4">
                    {course.materials.map((material, index) => (
                        <div
                            key={material.id || index}
                            className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition"
                        >
                            <div className="flex items-center space-x-4">
                                <span className="text-2xl"></span>
                                <div>
                                    <h3 className="text-md font-semibold text-gray-800">{material.name}</h3>
                                    <p className="text-sm text-gray-500">{material.name.split('.').pop().toUpperCase()}</p>
                                </div>
                            </div>
                            <a
                                href={getMaterialUrl(material.url)}
                                download
                                className="flex items-center gap-2 px-3 py-1.5 text-sm text-white bg-blue-500 hover:bg-blue-600 rounded-md"
                            >
                                <Download size={16} />
                                Download
                            </a>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-500">No materials available for this course yet.</p>
            )}
        </div>
    );
}

export function Reviews() {
    const { id } = useParams();
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                setLoading(true);
                const data = await getCourseReviews(id);
                console.log("Fetched reviews:", data);
                setReviews(data || []);
            } catch (err) {
                console.error("Error fetching reviews:", err);
                setError("Failed to load reviews");
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, [id]);

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                i <= rating ? (
                    <Star key={i} className="text-yellow-400 w-4 h-4" />
                ) : (
                    <StarOff key={i} className="text-gray-300 w-4 h-4" />
                )
            );
        }
        return <div className="mt-2 flex">{stars}</div>;
    };

    if (loading) {
        return <div className="animate-pulse p-4">Loading reviews...</div>;
    }

    if (error) {
        return <div className="text-red-500 p-4">{error}</div>;
    }

    return (
        <div className="mt-2 w-full">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Student Reviews</h2>
                <Link
                    to={`/courses/${id}/add-review`}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Add Review
                </Link>
            </div>

            {reviews.length > 0 ? (
                <div className="flex flex-wrap gap-4">
                    {reviews.map((review) => (
                        <div key={review.id} className="w-60 bg-gray-50 p-4 rounded-md border shadow-sm">
                            <p>"{review.comment}"</p>
                            {renderStars(review.rating)}
                            <p className="text-sm text-gray-500 mt-2">- {review.username}</p>
                            <p className="text-xs text-gray-400">{new Date(review.date).toLocaleDateString()}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-500">No reviews for this course yet.</p>
            )}
        </div>
    );
}

