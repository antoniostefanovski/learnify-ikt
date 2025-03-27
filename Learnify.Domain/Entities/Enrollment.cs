namespace Learnify.Domain.Entities
{
    public class Enrollment : BaseEntity
    {
        public Guid StudentId { get; set; }
        public User? Student { get; set; }
        public Guid CourseId { get; set; }
        public Course? Course { get; set; }
        public float Progress { get; set; }
        public DateTime EnrolledAt { get; set; } = DateTime.UtcNow;
    }
}
