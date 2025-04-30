import { addCertificate } from "../../services/CertificateService";

export class updateCertificate extends addCertificate {
    constructor(id, courseId, studentId) {
        super(courseId, studentId);
        this.id = id;
    }
}