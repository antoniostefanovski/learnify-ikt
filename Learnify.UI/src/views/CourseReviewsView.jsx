import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Star, StarOff } from "lucide-react";
import PropTypes from 'prop-types';
import { getReviewsByCourseId } from "../services/ReviewService";

function CourseReviewsContent(props) {
    const { courseId } = props;
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                setLoading(true);
                const reviewsData = await getReviewsByCourseId(courseId);
                setReviews(reviewsData);
            } catch (error) {
                console.error('Error fetching reviews:', error);
                setError('Failed to load reviews. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        if (courseId) {
            fetchReviews();
        }
    }, [courseId]);

    const renderStars = (rating) =>
        Array.from({ length: 5 }, (_, i) =>
            i < rating ? <Star key={i} className="text-yellow-400 w-4 h-4" /> : <StarOff key={i} className="text-gray-300 w-4 h-4" />
        );

    if (loading) return <div>Loading reviews...</div>;
    if (error) return <div className="text-red-500">{error}</div>;

    return (
        <div className="mt-2 w-full">
            <h2 className="text-xl font-semibold mb-6">Student Reviews</h2>
            <div className="flex flex-wrap gap-4">
                {reviews.length > 0 ? (
                    reviews.map((review, index) => (
                        <div key={index} className="w-60 bg-gray-50 p-4 rounded-md border shadow-sm">
                            <p>{`"${review.text}"`}</p>
                            <div className="mt-2 flex">{renderStars(review.rating)}</div>
                        </div>
                    ))
                ) : (
                    <p>No reviews available yet.</p>
                )}
            </div>
        </div>
    );
}

CourseReviewsContent.propTypes = {
    courseId: PropTypes.string.isRequired
};

export default function CourseReviewsView() {
    const { courseId } = useOutletContext();
    return <CourseReviewsContent courseId={courseId} />;
}
