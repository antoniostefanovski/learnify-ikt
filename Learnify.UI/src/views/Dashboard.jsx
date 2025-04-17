import Sidebar from '../components/Sidebar';
import Filters from '../components/Filters';
import CourseCard from '../components/CourseCard';
import RightPanel from '../components/RightPanel';
import { Link } from 'react-router-dom';


const courses = [
    { id: 1, title: "Operating Systems", description: "Learn the basic operating system abstraction, mechanisms and their implementations" },
    { id: 2, title: "Data Science", description: "Learn the core concepts, techniques, and tools in data science, from analysis to machine learning." },

];

export default function Dashboard() {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 p-6 bg-white">
                <Filters />
                <h2 className="text-xl font-semibold text-blue-800 mb-4">Your courses</h2>
                <div className="flex flex-col gap-4">
                    {courses.map(course => (
                        <CourseCard
                            key={course.id}
                            id={course.id}
                            title={course.title}
                            description={course.description}
                        />
                    ))}
                </div>
            </div>
            <RightPanel />
        </div>
    );
}
