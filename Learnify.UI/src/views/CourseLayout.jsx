import { Link, Outlet, useLocation } from "react-router-dom";

export default function CourseLayout() {
    const location = useLocation();

    return (
        <div className="min-h-screen w-screen bg-gray-100 p-6 font-sans">
            <header className="flex items-center justify-between bg-white p-1 rounded-lg shadow-md">
                <img src="/logo1.png" alt="Learnify Logo" className="max-w-sm max-h-sm" />
                <span className="text-gray-500 text-xl font-bold">Hello, User!</span>
            </header>

            <nav className="flex gap-6 mt-6">
                {["Home", "Courses", "Leaderboard"].map((item) => {
                    const path = item.toLowerCase();
                    return (
                        <Link
                            key={item}
                            to={`/${path}`}
                            className={`py-2 px-4 rounded-md font-medium ${location.pathname === `/${path}` ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-200"}`}
                        >
                            {item}
                        </Link>
                    );
                })}
            </nav>

            <section className="mt-10">
                <h1 className="text-4xl font-bold text-gray-800">Data Science</h1>
            </section>

            <nav className="flex gap-6 mt-4">
                {["description", "materials", "reviews"].map((tab) => (
                    <Link
                        key={tab}
                        to={tab}
                        className={`py-2 px-4 rounded-md ${location.pathname.endsWith(tab) || (tab === "description" && location.pathname === "/course") ? "bg-blue-500 text-white" : "text-gray-600 hover:bg-gray-200"}`}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </Link>
                ))}
            </nav>

            <div className="mt-8 w-full bg-white p-6 rounded-xl shadow-md text-gray-700">
                <Outlet />
            </div>
        </div>
    );
}
