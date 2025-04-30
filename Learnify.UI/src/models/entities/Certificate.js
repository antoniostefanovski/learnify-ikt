import { BaseEntity } from "./BaseEntity";

export class Certificate extends BaseEntity {
    constructor(id, studentId, student = null, courseId, course = null, issuedAt) {
        super(id);
        this.studentId = studentId;
        this.student = student;
        this.courseId = courseId;
        this.course = course;
        this.issuedAt = issuedAt;
    }
}