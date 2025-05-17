import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Logo from "../assets/Logo.png";
import { useParams } from 'react-router-dom';
import { getQuizById, getQuizzesByCourse } from '../services/QuizService';
import { getQuestionsByQuiz } from '../services/QuestionService';
import { useNavigate } from "react-router-dom";

const QuizPage = () => {
    const { courseId } = useParams();
    const navigate = useNavigate();
    const [quiz, setQuiz] = useState(null);
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [userAnswers, setUserAnswers] = useState([]); // Track user answers
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [correctCount, setCorrectCount] = useState(0);

    useEffect(() => {
        const fetchQuizData = async () => {
            try {
                setLoading(true);
                const quizzes = await getQuizzesByCourse(courseId);
                const allQuestionsArrays = await Promise.all(
                    quizzes.map(q => getQuestionsByQuiz(q.id))
                );
                const allQuestions = allQuestionsArrays.flat();
                setQuiz({ title: quizzes[0]?.title || "QUIZ TIME" });
                setQuestions(allQuestions);
            } catch (error) {
                console.error('Error fetching quiz data:', error);
                setError('Failed to load quiz. Please try again.');
            } finally {
                setLoading(false);
            }
        };
        fetchQuizData();
    }, [courseId]);

    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
            setSelectedAnswer(userAnswers[currentQuestionIndex - 1] ?? null);
        }
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswer(userAnswers[currentQuestionIndex + 1] ?? null);
        }
    };

    const handleSelectAnswer = (optionIndex) => {
        setSelectedAnswer(optionIndex);
        const updatedAnswers = [...userAnswers];
        updatedAnswers[currentQuestionIndex] = optionIndex;
        setUserAnswers(updatedAnswers);
    };

    const handleSubmit = () => {
        let correct = 0;
        questions.forEach((q, idx) => {
            const selectedIdx = userAnswers[idx];
            if (selectedIdx !== undefined && q.answers[selectedIdx]?.isCorrect) {
                correct++;
            }
        });
        setCorrectCount(correct);
        setShowResult(true);
    };

    const handleClosePopup = () => {
        setShowResult(false);
        navigate(`/course/${courseId}`);
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
                {currentQuestion.answers && currentQuestion.answers.map((answer, index) => (
                    <button
                        key={index}
                        className={`${
                            userAnswers[currentQuestionIndex] === index
                                ? 'bg-indigo-500 text-white'
                                : 'bg-indigo-300 hover:bg-indigo-400 text-black'
                        } font-semibold py-3 px-6 rounded-2xl shadow transition`}
                        onClick={() => handleSelectAnswer(index)}
                    >
                        {answer.text}
                    </button>
                ))}
            </div>

            {/* Navigation & Submit */}
            <div className="flex justify-between items-center w-full max-w-xl px-6 mb-6">
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
            {currentQuestionIndex === questions.length - 1 &&(<button
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-2xl shadow-lg transition"
                onClick={handleSubmit}
                disabled={userAnswers.length !== questions.length}
            >
                Submit
            </button>)}

            {/* Result Popup */}
            {showResult && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-gradient-to-br from-blue-100 via-white to-blue-200 rounded-3xl p-12 shadow-2xl flex flex-col items-center border-4 border-blue-400 max-w-md w-full animate-fade-in">
                        <div className="flex flex-col items-center mb-6">
                            <span className="text-5xl mb-2">🎉</span>
                            <h2 className="text-3xl font-extrabold text-blue-700 mb-2 drop-shadow">Quiz Result</h2>
                            <div className="w-20 h-2 bg-gradient-to-r from-blue-400 to-green-400 rounded-full mb-4"></div>
                        </div>
                        <p className="mb-8 text-xl text-gray-700 font-semibold text-center">
                            You got <span className="font-bold text-green-600 text-2xl">{correctCount}</span> out of <span className="font-bold text-blue-600 text-2xl">{questions.length}</span> correct!
                        </p>
                        <button
                            className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-8 py-3 rounded-2xl font-bold text-lg shadow-lg transition-all duration-200"
                            onClick={handleClosePopup}
                        >
                            Back to Course
                        </button>
                    </div>
                </div>
)}
        </div>
    );
};

export default QuizPage;
