import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Logo from "../assets/Logo.png";
import { useParams } from 'react-router-dom';
import { getQuizById } from '../services/QuizService';
import { getQuestionsByQuiz } from '../services/QuestionService';

const QuizPage = () => {
    const { quizId } = useParams();
    const [quiz, setQuiz] = useState(null);
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchQuizData = async () => {
            try {
                setLoading(true);
                const [quizData, questionsData] = await Promise.all([
                    getQuizById(quizId),
                    getQuestionsByQuiz(quizId)
                ]);
                
                setQuiz(quizData);
                setQuestions(questionsData);
            } catch (error) {
                console.error('Error fetching quiz data:', error);
                setError('Failed to load quiz. Please try again.');
            } finally {
                setLoading(false);
            }
        };
        
        fetchQuizData();
    }, [quizId]);
    
    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
            setSelectedAnswer(null);
        }
    };
    
    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswer(null);
        }
    };
    
    const handleSelectAnswer = (optionIndex) => {
        setSelectedAnswer(optionIndex);
    };
    
    if (loading) return <div className="w-full min-h-screen flex items-center justify-center">Loading quiz...</div>;
    if (error) return <div className="w-full min-h-screen flex items-center justify-center text-red-500">{error}</div>;
    if (!quiz || questions.length === 0) return <div className="w-full min-h-screen flex items-center justify-center">No quiz questions available.</div>;
    
    const currentQuestion = questions[currentQuestionIndex];

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
                <h1 className="text-3xl font-bold text-blue-600">{quiz.title || "QUIZ TIME"}</h1>
                <span className="text-3xl">❓</span>
            </div>

            {/* Question */}
            <div className="bg-blue-100 p-6 rounded-2xl text-center max-w-xl w-full mb-6 shadow">
                <h2 className="text-xl font-semibold">{currentQuestion.text}</h2>
                <div className="text-sm text-gray-600 mt-2">
                    Question {currentQuestionIndex + 1} of {questions.length}
                </div>
            </div>

            {/* Answers */}
            <div className="grid grid-cols-2 gap-4 max-w-xl w-full mb-8">
                {currentQuestion.options && currentQuestion.options.map((option, index) => (
                    <button
                        key={index}
                        className={`${
                            selectedAnswer === index 
                                ? 'bg-indigo-500 text-white' 
                                : 'bg-indigo-300 hover:bg-indigo-400 text-black'
                        } font-semibold py-3 px-6 rounded-2xl shadow transition`}
                        onClick={() => handleSelectAnswer(index)}
                    >
                        {option}
                    </button>
                ))}
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center w-full max-w-xl px-6">
                <button 
                    className={`${
                        currentQuestionIndex > 0 
                            ? 'bg-blue-500 hover:bg-blue-600' 
                            : 'bg-gray-300 cursor-not-allowed'
                    } text-white p-3 rounded-full`}
                    onClick={handlePreviousQuestion}
                    disabled={currentQuestionIndex === 0}
                >
                    <FaArrowLeft />
                </button>
                <span className="text-3xl">✨</span>
                <button 
                    className={`${
                        currentQuestionIndex < questions.length - 1 
                            ? 'bg-blue-500 hover:bg-blue-600' 
                            : 'bg-gray-300 cursor-not-allowed'
                    } text-white p-3 rounded-full`}
                    onClick={handleNextQuestion}
                    disabled={currentQuestionIndex === questions.length - 1}
                >
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
};

export default QuizPage;
