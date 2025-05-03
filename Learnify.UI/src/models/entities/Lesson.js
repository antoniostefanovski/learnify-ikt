export class Lesson {
    constructor(
        id,
        title,
        content,
        moduleId,
        module = null,
        files = [],
    ) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.module = module;
        this.moduleId = moduleId;
        this.files = files;
        
    }
}