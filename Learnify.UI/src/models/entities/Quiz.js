export class Lesson {
    constructor(
        id,
        title,
        courseId,
        course = null,
        questions = [],
    ) {
        this.id = id;
        this.title = title;
        this.courseId = courseId;
        this.course = course;
        this.questions = questions;
        
    }
}