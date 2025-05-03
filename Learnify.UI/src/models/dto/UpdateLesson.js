import { insertLesson } from "../../services/LessonService";

export class updateLesson extends insertLesson {
    constructor(id, title, content, moduleId) {
        super(title, content, moduleId);
        this.id = id;
    }
}