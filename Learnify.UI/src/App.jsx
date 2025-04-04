import React from "react";
import WelcomePage from "./components/WelcomePage"; // Импорт на новата компонента
import "./index.css"; // Tailwind стилови
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";     // Login страница (фиктивна)
import RegisterPage from "./components/RegisterPage"; // Register страница (фиктивна)

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<WelcomePage />} /> {/* Главната страница */}
                <Route path="/login" element={<LoginPage />} /> {/* Login страница */}
                <Route path="/register" element={<RegisterPage />} /> {/* Register страница */}
            </Routes>
        </Router>
    );
}

export default App;
