import { getReviews } from "../services/CourseReviewsService";
import { Star, StarOff } from "lucide-react";

export default function CourseReviewsView() {
    const reviews = getReviews();

    const renderStars = (rating) =>
        Array.from({ length: 5 }, (_, i) =>
            i < rating ? <Star key={i} className="text-yellow-400 w-4 h-4" /> : <StarOff key={i} className="text-gray-300 w-4 h-4" />
        );

    return (
        <div className="mt-2 w-full">
            <h2 className="text-xl font-semibold mb-6">Student Reviews</h2>
            <div className="flex flex-wrap gap-4">
                {reviews.map((review, index) => (
                    <div key={index} className="w-60 bg-gray-50 p-4 rounded-md border shadow-sm">
                        <p>{`"${review.text}"`}</p>
                        <div className="mt-2 flex">{renderStars(review.rating)}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
