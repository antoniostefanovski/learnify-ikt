import { insertReview } from "../../services/ReviewService";

export class updateReview extends insertReview {
    constructor(id, reviewedOn, rating, comment, userId, courseId) {
        super(rating, comment, userId, courseId);
        this.id = id;
        this.reviewedOn = reviewedOn;
    }
}