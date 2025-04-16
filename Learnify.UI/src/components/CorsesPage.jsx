import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from '../assets/Logo.png';
import Course_One from '../assets/Course_One.png';
import Course_Two from '../assets/Course_Two.png';
import Course_Three from '../assets/Course_Three.png';

const courses = [
    {
        id: "data-science",
        name: "Data Science",
        image: {Course_One},
    },
    {
        id: "operating-systems",
        name: "Operating Systems",
        image: {Course_Two},
    },
    {
        id: "computer-networks",
        name: "Computer Networks",
        image: {Course_Three},
    },
];

function CoursesPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white px-8 py-10">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <div className="flex items-center space-x-2">
                    <img src={Logo} alt="Learnify Logo" className="h-10" />
                    <h1 className="text-2xl font-bold text-blue-700">Learnify</h1>
                </div>
                <p className="text-lg font-semibold text-blue-700">Hello, User!</p>
            </div>

            {/* Nav */}
            <div className="flex space-x-6 text-xl mb-6 ml-2">
                <span className="text-gray-700 hover:underline cursor-pointer">Home</span>
                <span className="text-black font-bold border-b-2 border-black">Courses</span>
            </div>

            {/* Title */}
            <h2 className="text-4xl font-extrabold text-blue-900 mb-10 ml-2">Pick a course!</h2>

            {/* Courses */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
                {courses.map((course) => (
                    <div
                        key={course.id}
                        onClick={() => navigate(`/course/${course.id}`)}
                        className="cursor-pointer w-64 h-64 rounded-3xl shadow-md hover:shadow-xl transition-transform transform hover:scale-105 relative overflow-hidden"
                    >
                        <img
                            src={course.image}
                            alt={course.name}
                            className="w-full h-full object-cover rounded-3xl"
                        />
                        <div className="absolute bottom-4 left-4 text-white text-2xl font-bold drop-shadow-lg bg-black bg-opacity-30 px-2 py-1 rounded">
                            {course.name}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CoursesPage;
