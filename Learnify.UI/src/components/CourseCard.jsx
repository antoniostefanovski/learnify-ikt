import { ArrowForward } from '@mui/icons-material';
import { Link } from 'react-router-dom';
//import courseImage from '../../public/courses.png';

export default function CourseCard({ title, description, id }) {
    return (
        <div className="bg-blue-100 p-6 rounded-2xl flex items-center justify-between shadow-md">
            <div className="flex items-center gap-6">
                <img
                    src="/courses.png"
                    alt="course"
                    className="w-20 h-20 rounded-full bg-white shadow-sm"
                />
                <div>
                    <h3 className="text-xl font-bold text-blue-800">{title}</h3>
                    <p className="text-sm text-gray-700">{description}</p>
                </div>
            </div>

            {}
            <Link to={`/course/${id}`}>
                <ArrowForward className="text-blue-700 text-3xl" />
            </Link>
        </div>
    );
}
