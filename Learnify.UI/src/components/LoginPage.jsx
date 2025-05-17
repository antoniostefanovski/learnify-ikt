import React from "react";
import Logo from '../assets/Logo.png';
import Checklist_image from '../assets/Checklist_image.png';

function LoginPage() {
    return (
        <div className="h-screen flex">
            <div className="w-1/2 bg-white flex flex-col justify-center items-center p-10">
                <div className="mb-6 flex items-center">
                    <img src={Logo} alt="Learnify Logo" className="h-10 w-10 mr-2" />
                    <h1 className="text-3xl font-bold text-blue-700">Learnify</h1>
                </div>
                <p className="text-xl italic text-blue-700 text-center max-w-sm">
                    Welcome back, future genius! Let’s pick up where you left off.
                </p>
                <img
                    src={Checklist_image}
                    alt="Checklist illustration"
                    className="mt-10 w-3/4 max-w-md"
                />
            </div>

            <div className="w-1/2 bg-white flex flex-col justify-center px-20">
                <h2 className="text-4xl font-bold text-blue-700 mb-6">Log in and level up!</h2>
                <form className="space-y-6">
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-blue-700 font-medium mb-1">Email:</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="px-4 py-2 rounded-lg bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-blue-700 font-medium mb-1">Password:</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="px-4 py-2 rounded-lg bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
