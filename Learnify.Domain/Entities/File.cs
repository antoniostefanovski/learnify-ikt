namespace Learnify.Domain.Entities
{
    public class File : BaseEntity
    {
        public string FileName { get; set; } = string.Empty;
        public string FileUrl { get; set; } = string.Empty;
        public Guid LessonId { get; set; }
        public Lesson? Lesson { get; set; }
        public DateTime UploadedAt { get; set; } = DateTime.UtcNow;
    }
}
