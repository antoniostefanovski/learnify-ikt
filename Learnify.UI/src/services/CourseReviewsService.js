import { CourseReviews } from "../models/CourseReviews";

export function getReviews() {
    return [
        new CourseReviews("Great course!", 5),
        new CourseReviews("Nice examples!", 4),
        new CourseReviews("Could be more advanced", 3)
    ];
}