import { quizRequest } from "../../services/QuizService";

export class updateQuiz extends quizRequest {
    constructor(id, title, courseId) {
        super(title, courseId);
        this.id = id;
    }
}