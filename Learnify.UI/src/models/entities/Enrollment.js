export class Enrollment {
    constructor(
        id,
        studentId,
        student = null,
        courseId,
        course = null,
        progress,
        enrolledAt = new Date()
    ) {
        this.id = id;
        this.studentId = studentId;
        this.student = student;
        this.courseId = courseId;
        this.course = course;
        this.progress = progress;
        this.enrolledAt = enrolledAt;
        
    }
}