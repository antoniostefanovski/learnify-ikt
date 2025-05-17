namespace Learnify.Domain.DTO
{
    public class CreateCourseRequest
    {
        public string Category { get; set; } = string.Empty;
        public string CourseDescription { get; set; } = string.Empty;
        public string? CourseImage { get; set; } = null;
        public string CourseName { get; set; } = string.Empty;
    }
}