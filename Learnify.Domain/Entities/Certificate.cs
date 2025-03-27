namespace Learnify.Domain.Entities
{
    public class Certificate : BaseEntity
    {
        public Guid StudentId { get; set; }
        public User? Student { get; set; }
        public Guid CourseId { get; set; }
        public Course? Course { get; set; }
        public DateTime IssuedAt { get; set; } = DateTime.UtcNow;
    }
}
