import React from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/Logo.png';

function WelcomePage() {
    return (
        <div className="min-h-screen flex flex-col bg-white relative">

            <div className="absolute top-8 left-6 z-10">
                <img
                    src={Logo}
                    alt="Learnify Logo"
                    className="max-w-[120px] md:max-w-[150px] h-auto"
                />
            </div>


            <div className="w-full flex-grow max-w-screen-2xl flex flex-col lg:flex-row items-center justify-center px-6 lg:px-28 pt-32 lg:pt-0 mx-auto">


                <div className="lg:w-1/2 flex flex-col justify-center lg:pl-10 text-center lg:text-left">
                    {/* Title */}
                    <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-blue-700">
                        Learnify Study App
                    </h1>


                    <p className="text-lg sm:text-xl lg:text-xl text-gray-600 mt-4">
                        Welcome to the ultimate study experience! Whether you're here to ace exams,
                        learn new skills, or chase your dreams, you're in the right place.
                    </p>


                    <p className="text-md sm:text-lg lg:text-lg text-blue-500 italic mt-6">
                        Unlock your brainpower—one study session at a time!
                    </p>


                    <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                        <Link to="/login">
                            <button className="px-6 py-3 bg-gray-100 text-blue-700 rounded-full shadow-md hover:bg-blue-700 hover:text-white transition ease-in-out duration-300 transform hover:scale-105">
                                Login
                            </button>
                        </Link>
                        <Link to="/register">
                            <button className="px-6 py-3 bg-gray-100 text-blue-700 rounded-full shadow-md hover:bg-purple-600 hover:text-white transition ease-in-out duration-300 transform hover:scale-105">
                                Register
                            </button>
                        </Link>
                    </div>
                </div>


                <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
                    <div className="w-full max-w-lg lg:max-w-2xl">
                        <img 
                            src="/illustration.png" 
                            alt="Learning Illustration" 
                            className="w-full h-auto"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default WelcomePage;
