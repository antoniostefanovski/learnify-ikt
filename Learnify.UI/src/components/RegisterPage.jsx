import React from "react";

function RegisterPage() {
    return (
        <div className="h-screen flex">
            {/* Left Section */}
            <div className="w-1/2 bg-white flex flex-col justify-center items-center p-10">
                <div className="mb-6 flex items-center">
                    <img src="src/assets/Logo.png" alt="Learnify Logo" className="h-10 w-10 mr-2" />
                    <h1 className="text-3xl font-bold text-blue-700">Learnify</h1>
                </div>
                <p className="text-xl italic text-blue-700 text-center max-w-sm">
                    One step closer to your goals. Join now and start learning!
                </p>
                <img
                    src="src/assets/Register.png"
                    alt="Illustration with checklist and calendar"
                    className="mt-10 w-3/4 max-w-md"
                />
            </div>

            {/* Right Section */}
            <div className="w-1/2 bg-white flex flex-col justify-center px-20">
                <h2 className="text-4xl font-bold text-blue-700 mb-6">Register Now!</h2>
                <form className="space-y-5 w-full max-w-md">
                    <div>
                        <label htmlFor="firstName" className="block text-blue-700 font-medium mb-1">First Name:</label>
                        <input
                            type="text"
                            id="firstName"
                            placeholder="Enter your first name"
                            className="w-full px-4 py-2 rounded-lg bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="lastName" className="block text-blue-700 font-medium mb-1">Last Name:</label>
                        <input
                            type="text"
                            id="lastName"
                            placeholder="Enter your last name"
                            className="w-full px-4 py-2 rounded-lg bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-blue-700 font-medium mb-1">Email:</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 rounded-lg bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-blue-700 font-medium mb-1">Password:</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 rounded-lg bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="confirmPassword" className="block text-blue-700 font-medium mb-1">Confirm Password:</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            placeholder="Confirm your password"
                            className="w-full px-4 py-2 rounded-lg bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;
