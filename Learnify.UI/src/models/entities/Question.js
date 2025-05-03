export class Question {
    constructor(
        id,
        text,
        type = null,
        quizId,
        quiz = null,
        answers = [],
    ) {
        this.id = id;
        this.text = text;
        this.type = type;
        this.quizId = quizId;
        this.quiz = quiz;
        this.answers = answers;
        
    }
}