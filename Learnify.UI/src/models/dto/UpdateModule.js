import { insertModule } from "../../services/ModuleService";

export class updateModule extends insertModule {
    constructor(id, title, courseId, order) {
        super(title, courseId, order);
        this.id = id;
    }
}