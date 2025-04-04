import { Link, useLocation, Outlet } from "react-router-dom";
import { Star, StarOff, Download } from "lucide-react"; // Icon for download button

export default function CoursePage() {
    const location = useLocation();

    return (
        <div className="min-h-screen w-screen bg-gray-100 p-6 font-sans">
            {/* Header */}
            <header className="flex items-center justify-between bg-white p-1 rounded-lg shadow-md">
                <div className="flex items-center space-x-4">
                    <img src="/logo1.png" alt="Learnify Logo" className="max-w-sm max-h-sm" />
                </div>
                <span className="text-gray-500 text-xl font-bold">Hello, User!</span>
            </header>

            {/* Main Navigation */}
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

            {/* Course Name */}
            <section className="mt-10">
                <h1 className="text-4xl font-bold text-gray-800">Data Science</h1>
            </section>

            {/* Sub Navigation */}
            <nav className="flex gap-6 mt-4">
                <Link
                    to="description"
                    className={`py-2 px-4 rounded-md ${location.pathname.endsWith("description") || location.pathname === "/course" ? "bg-blue-500 text-white" : "text-gray-600 hover:bg-gray-200"
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
            </nav>

            {/* Page Content Wrapper */}
            <div className="mt-8 w-full bg-white p-6 rounded-xl shadow-md text-gray-700">
                <Outlet />
            </div>
            
        </div>
    );
}

export function Description() {
    return (
       
        <>
            <div className="bg-[url('/background_.png')] bg-cover bg-center bg-no-repeat p-6 rounded-xl shadow-md">
                <div className="mt-2 w-full">
                    <p className="max-w-xl  mb-6">
                        Data science courses teach an interdisciplinary field focused on
                        extracting knowledge and insights from data. Learn data manipulation,
                        statistical analysis and machine learning to unlock insights and enhance
                        decision-making and predictive abilities applicable to various fields.
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
                    
               
                </div>
            </div>
            
           
        </>
        
    );
}

export function Materials() {
    const isAdmin = true; // Replace with actual logic for checking if the user is an admin

    const files = [
        { name: "Python for Data Science", format: "PDF", link: "#"},
        { name: "Jupyter Notebook Setup Guide", format: "PDF", link: "#" },
        { name: "Intro to Pandas and NumPy", format: "Slides", link: "#" },
        { name: "Sample Datasets", format: "ZIP", link: "#" },
        { name: "ML Cheat Sheet", format: "PDF", link: "#"}
    ];

    return (

        <div className="mt-2 w-full">

            {/* Add Material Button (Visible only for Admin) */}
            {isAdmin && (
                <button
                    className="mt-0 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md"
                    onClick={() => console.log("Add Material Clicked")}
                >
                    Add Material
                </button>
            )}


            <h2 className="mt-3 text-xl font-semibold mb-6">Materials</h2>
            <div className="space-y-4">
                {files.map((file, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition"
                    >
                        <div className="flex items-center space-x-4">
                            <span className="text-2xl">{file.icon}</span>
                            <div>
                                <h3 className="text-md font-semibold text-gray-800">{file.name}</h3>
                                <p className="text-sm text-gray-500">{file.format}</p>
                            </div>
                        </div>
                        <a
                            href={file.link}
                            download
                            className="flex items-center gap-2 px-3 py-1.5 text-sm text-white bg-blue-500 hover:bg-blue-600 rounded-md"
                        >
                            <Download size={16} />
                            Download
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export function Reviews() {
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

    return (
        <div className="mt-2 w-full">
            <h2 className="text-xl font-semibold mb-6">Student Reviews</h2>
            <div className="flex flex-wrap gap-4">
                <div className="w-60 bg-gray-50 p-4 rounded-md border shadow-sm">
                    <p>"Amazing course! The ML section was top-notch." </p>
                    {renderStars(5)}
                </div>
                <div className="w-60 bg-gray-50 p-4 rounded-md border shadow-sm">
                    <p>"Great mix of theory and practical examples."</p>
                    {renderStars(4)}
                </div>
                <div className="w-60 bg-gray-50 p-4 rounded-md border shadow-sm">
                    <p>"Loved the projects! Really helped me understand data cleaning." </p>
                    {renderStars(3)}
                </div>
            </div>
        </div>
    );
}

