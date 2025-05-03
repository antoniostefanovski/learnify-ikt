import { questionRequest } from "../../services/QuestionService";

export class updateQuestion extends questionRequest {
    constructor(id, text, type, quizId) {
        super(text, type, quizId);
        this.id = id;
    }
}