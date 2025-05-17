import React from "react";
import WelcomePage from "./components/WelcomePage";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import CoursePage, {Description,Materials,Reviews } from "./components/CoursePage";
import CoursesPage from "./components/CorsesPage.jsx";
import QuizPage from "./components/QuizPage.jsx";
import Dashboard from "./views/Dashboard";
import AddCoursePage from "./components/AddCoursePage";
import EditCoursePage from "./components/EditCoursePage";
import Leaderboard from "./components/Leaderboard";
import Footer from "./components/Footer";
import { MockDataProvider } from "./contexts/MockDataContext.jsx";
import DiagnosticTest from "./components/DiagnosticTest";

// Layout component to include footer on all pages
const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

function App() {
    return (
        <MockDataProvider>
            <Router>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<WelcomePage />} />
                        <Route path="/diagnostic" element={<DiagnosticTest />} />
                        <Route path="/welcome" element={<WelcomePage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/courses" element={<CoursesPage />} />
                        <Route path="/course/:id" element={<CoursePage />}>
                            <Route index element={<Description />} />
                            <Route path="description" element={<Description />} />
                            <Route path="materials" element={<Materials />} />
                            <Route path="reviews" element={<Reviews />} />
                        </Route>
                        <Route path="/course/:courseId/quiz" element={<QuizPage />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/add-course" element={<AddCoursePage />} />
                        <Route path="/edit-course/:id" element={<EditCoursePage />} />
                        <Route path="/leaderboard" element={<Leaderboard />} />
                    </Route>
                </Routes>
            </Router>
        </MockDataProvider>
    );
}

export default App;
