export class CourseDescription {
    constructor(title, description, topics = []) {
        this.title = title;
        this.description = description;
        this.topics = topics;
    }
}