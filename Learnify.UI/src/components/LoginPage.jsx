
import Checklist_image from '../assets/Checklist_image.png';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthService } from '../services/AuthService';
import Logo from '../assets/logo.png';
import { Link } from "react-router-dom";

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        
        try {
            await AuthService.login(email, password);
            navigate('/dashboard');
        } catch (err) {
            setError(err.response?.data?.error || 'Failed to login. Please check your credentials.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="h-screen flex">
            <div className="w-1/2 bg-white flex flex-col justify-center items-center p-10">
                <div className="mb-6 flex items-center">
                    <img src={Logo} alt="Learnify Logo" className="h-10 w-10 mr-2" />
                    <h1 className="text-3xl font-bold text-blue-700">Learnify</h1>
                </div>
                <p className="text-xl italic text-blue-700 text-center max-w-sm">
                    Welcome back, future genius! Let's pick up where you left off.
                </p>
                <img
                    src={Checklist_image}
                    alt="Checklist illustration"
                    className="mt-10 w-3/4 max-w-md"
                />
            </div>

            <div className="w-1/2 bg-white flex flex-col justify-center px-20">
                <h2 className="text-4xl font-bold text-blue-700 mb-6">Log in and level up!</h2>
                
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                        {error}
                    </div>
                )}
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-blue-700 font-medium mb-1">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="px-4 py-2 rounded-lg bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-blue-500 w-96"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-blue-700 font-medium mb-1">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="px-4 py-2 rounded-lg bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-blue-500 w-96"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`mt-4 bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                        {isLoading ? 'Logging in...' : 'Login'}
                    </button>
                    <Link
                        to="/register"
                        className="text-center text-sm text-blue-700 ml-4 mt-4 hover:underline"
                    >
                        Don't have an account ? Register now.
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;