export class Answer {
    constructor(id, text, isCorrect, questionId, question = null) {
        this.id = id;
        this.text = text;
        this.isCorrect = isCorrect;
        this.questionId = questionId;
        this.question = question;
    }
}
