using Learnify.Domain.Entities;

namespace Learnify.Domain.DTO
{
    public class FileRequest
    {
        public string FileName { get; set; } = string.Empty;
        public string FileUrl { get; set; } = string.Empty;
        public Guid LessonId { get; set; }
    }
}
