import { CourseDescription } from "../models/CourseDescription";

export function getCourse() {
    return new CourseDescription(
        "Data Science",
        "Data science courses teach an interdisciplinary field focused on extracting knowledge and insights from data.Learn data manipulation, statistical analysis and machine learning to unlock insights and enhance decision - making and predictive abilities applicable to various fields.",
        [
            "Programming for Data Science",
            "Statistics and Probability",
            "Data Visualization",
            "Machine Learning",
            "Big Data Technologies and Tools"
        ]
    );
}