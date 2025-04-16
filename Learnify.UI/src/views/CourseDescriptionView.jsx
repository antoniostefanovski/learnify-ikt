import { getCourse } from "../services/CourseDescriptionService";

export default function CourseDescriptionView() {
    const course = getCourse();

    return (
        <div className="bg-[url('/background_.png')] bg-cover bg-center bg-no-repeat p-6 rounded-xl shadow-md">
            <p className="max-w-xl mb-6">{course.description}</p>
            <h2 className="text-xl font-semibold mb-2">What will you learn?</h2>
            <ul className="list-disc list-inside space-y-1">
                {course.topics.map((topic, idx) => (
                    <li key={idx}>{topic}</li>
                ))}
            </ul>
        </div>
    );
}
