export class Module {
    constructor(
        id,
        title,
        courseId,
        course = null,
        order,
        lessons = [],
    ) {
        this.id = id;
        this.title = title;
        this.courseId = courseId;
        this.course = course;
        this.order = order;
        this.lessons = lessons;
        
    }
}