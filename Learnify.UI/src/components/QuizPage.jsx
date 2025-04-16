import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Logo from "../assets/Logo.png";

const QuizPage = () => {
    const question = "Which algorithm is most commonly used for clustering data?";
    const options = ["Decision tree", "Random Forest", "K-Means", "Naive Bayes"];

    return (
        <div className="w-full min-h-screen bg-white text-black px-6 py-8 flex flex-col items-center justify-start">
            {/* Top Bar */}
            <div className="w-full flex justify-between items-center mb-6">
                <div className="flex items-center space-x-2 text-blue-600 text-2xl font-bold">
                    <img src={Logo} alt="Logo" className="w-8 h-8" />
                    <span>Learnify</span>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <span className="absolute -top-1 -right-1 text-xs bg-red-500 text-white rounded-full px-1">1</span>
                        <span className="text-2xl">🔔</span>
                    </div>
                    <span className="text-2xl">👤</span>
                </div>
            </div>

            {/* Header */}
            <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl">🏆</span>
                <h1 className="text-3xl font-bold text-blue-600">QUIZ TIME</h1>
                <span className="text-3xl">❓</span>
            </div>

            {/* Question */}
            <div className="bg-blue-100 p-6 rounded-2xl text-center max-w-xl w-full mb-6 shadow">
                <h2 className="text-xl font-semibold">{question}</h2>
            </div>

            {/* Answers */}
            <div className="grid grid-cols-2 gap-4 max-w-xl w-full mb-8">
                {options.map((option, index) => (
                    <button
                        key={index}
                        className="bg-indigo-300 hover:bg-indigo-400 text-black font-semibold py-3 px-6 rounded-2xl shadow transition"
                    >
                        {option}
                    </button>
                ))}
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center w-full max-w-xl px-6">
                <button className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600">
                    <FaArrowLeft />
                </button>
                <span className="text-3xl">✨</span>
                <button className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600">
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
};

export default QuizPage;
