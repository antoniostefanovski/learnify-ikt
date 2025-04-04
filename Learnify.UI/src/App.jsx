import React from "react";
import WelcomePage from "./components/WelcomePage"; // Импорт на новата компонента
import "./index.css"; // Tailwind стилови
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";     // Login страница (фиктивна)
import RegisterPage from "./components/RegisterPage"; // Register страница (фиктивна)
import CoursePage, {Description,Materials,Reviews } from "./components/CoursePage"; // Course page (hardcoded)

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<WelcomePage />} /> {/* Главната страница */}
                <Route path="/login" element={<LoginPage />} /> {/* Login страница */}
                <Route path="/register" element={<RegisterPage />} /> {/* Register страница */}

                <Route path="/course" element={<CoursePage />}>
                    <Route index element={<Description />} />
                    <Route path="description" element={<Description />} />
                    <Route path="materials" element={<Materials />} />
                    <Route path="reviews" element={<Reviews />} />
                </Route>

            </Routes>
        </Router>
    );
}

export default App;
