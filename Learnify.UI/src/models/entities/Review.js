export class Review {
    constructor(
        id,
        rating,
        comment,
        reviewedOn = new Date(),
        userId,
        user = null,
        courseId,
        course = null
    ) {
        this.id = id;
        this.rating = rating;
        this.comment = comment;
        this.reviewedOn = reviewedOn;
        this.userId = userId;
        this.user = user;
        this.courseId = courseId;
        this.course = course;
        
    }
}