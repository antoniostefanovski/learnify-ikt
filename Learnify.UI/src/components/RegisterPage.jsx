import React from "react";


function RegisterPage() {
    return (
        <div className="h-screen bg-gray-100 flex justify-center items-center">
            {}
            <div className="w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center mb-6">Register-Probna samo!!</h2>
                <p className="text-center mb-8 text-lg text-gray-600">Создадете нов акаунт и започнете со учење!</p>

                {/* Формата за Register */}
                <form className="space-y-6">
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-600" htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            className="mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder="Внесете корисничко име"
                            required
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-600" htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            className="mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder="Внесете емаил"
                            required
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-600" htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            className="mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder="Внесете лозинка"
                            required
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-600" htmlFor="confirm-password">Confirm Password:</label>
                        <input
                            type="password"
                            id="confirm-password"
                            className="mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder="Потврдете ја лозинката"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;
