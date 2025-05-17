import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png";
import Star from "../assets/star.png";
import { insertReview } from "../services/ReviewService";

const AddReviewPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [feedback, setFeedback] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const reviewToInsert = {
                courseId: id,
                rating,
                text: feedback,
            };

            await insertReview(reviewToInsert);
            alert("Thank you for your feedback!");
            navigate(`/course/${id}`);
        } catch (error) {
            alert("Failed to submit review. Please try again.");
            console.error(error);
        }
    };

    return (
        <div className="min-h-screen bg-white flex flex-col items-center px-8 py-10">
            <div className="w-full max-w-5xl flex justify-between items-center mb-12">
                <div className="text-4xl font-bold text-blue-600 flex items-center gap-3">
                    <img src={Logo} alt="Learnify Logo" className="h-12" />
                    <h1 className="text-3xl font-bold text-blue-700">Learnify</h1>
                </div>
                <div className="text-xl font-semibold text-blue-700 mr-4">Hello, User!</div>
            </div>

            <p className="text-2xl text-center text-blue-600 italic mb-8 max-w-3xl">
                We’d love to hear your thoughts! Let us know how we’re doing and help us improve your experience.
            </p>

            <h2 className="text-2xl font-semibold mb-6">How would you rate your experience?</h2>
            <div className="flex mb-10 gap-5">
                {[...Array(5)].map((_, index) => {
                    const starValue = index + 1;
                    const isActive = starValue <= (hover || rating);

                    return (
                        <button
                            key={starValue}
                            type="button"
                            onClick={() => setRating(starValue)}
                            onMouseEnter={() => setHover(starValue)}
                            onMouseLeave={() => setHover(0)}
                            className="border-none bg-transparent p-0"
                        >
                            <img
                                src={Star}
                                alt={`${starValue} star`}
                                className={`h-16 w-16 transition-transform duration-150 ${
                                    isActive ? "brightness-100" : "brightness-50"
                                }`}
                            />
                        </button>
                    );
                })}
            </div>

            <form onSubmit={handleSubmit} className="w-full max-w-2xl text-center">
                <label className="block mb-4 text-xl font-medium">Tell us about your experience</label>
                <textarea
                    placeholder="Write your feedback here"
                    className="w-full p-6 border border-gray-300 rounded-lg h-40 resize-none text-lg focus:outline-none focus:ring focus:ring-blue-200"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                ></textarea>

                <button
                    type="submit"
                    className="mt-6 bg-blue-600 text-white px-10 py-3 text-lg rounded-full hover:bg-blue-700 transition"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddReviewPage;
