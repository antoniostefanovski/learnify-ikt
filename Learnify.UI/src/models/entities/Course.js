export class Course {
    constructor(
        id,
        title,
        description,
        professorId,
        professor = null,
        createdAt = new Date(),
        updatedAt = new Date(),
        enrollments = [],
        modules = [],
        quizzes = [],
        reviews = []
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.professorId = professorId;
        this.professor = professor;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.enrollments = enrollments;
        this.modules = modules;
        this.quizzes = quizzes;
        this.reviews = reviews;
    }
}
