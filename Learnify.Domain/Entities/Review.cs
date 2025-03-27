namespace Learnify.Domain.Entities
{
    public class Review : BaseEntity
    {
        public double Rating { get; set; }
        public string Comment { get; set; } = string.Empty;
        public DateTime ReviewdOn { get; set; } = DateTime.UtcNow;
        public Guid UserId { get; set; }
        public User? User { get; set; }
        public Guid CourseId { get; set; }
        public Course? Course { get; set; }
    }
}
