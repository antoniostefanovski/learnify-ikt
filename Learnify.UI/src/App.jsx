import React from "react";
import WelcomePage from "./components/WelcomePage";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import CoursePage, {Description,Materials,Reviews } from "./components/CoursePage";
import CoursesPage from "./components/CorsesPage.jsx";
import QuizPage from "./components/QuizPage.jsx";
import Dashboard from "./views/Dashboard";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/course/:id" element={<CoursePage />}>
                    <Route index element={<Description />} />
                    <Route path="description" element={<Description />} />
                    <Route path="materials" element={<Materials />} />
                    <Route path="reviews" element={<Reviews />} />
                </Route>
                <Route path="/course/:id/quiz" element={<QuizPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    );
}

export default App;
