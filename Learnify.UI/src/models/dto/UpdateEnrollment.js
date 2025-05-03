import { insertEnrollment } from "../../services/EnrollmentService";

export class updateEnrollment extends insertEnrollment {
    constructor(id, progress, courseId, studentId) {
        super(courseId, studentId);
        this.id = id;
        this.progress = progress;
    }
}