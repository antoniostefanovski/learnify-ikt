import { CourseMaterials } from "../models/CourseMaterials";

export function getMaterials() {
    return [
        new CourseMaterials("Python for Data Science", "PDF", "#"),
        new CourseMaterials("Intro to Pandas", "Slides", "#"),
        new CourseMaterials("ML Cheat Sheet", "PDF", "#")
    ];
}