using Learnify.Domain.Entities;

namespace Learnify.Domain.DTO
{
    public class InsertModule
    {
        public string Title { get; set; } = string.Empty;
        public Guid CourseId { get; set; }
        public int Order { get; set; }
    }
}
