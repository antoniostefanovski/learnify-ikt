namespace Learnify.Domain.Entities
{
    public class Course : BaseEntity
    {
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public Guid ProfessorId { get; set; }
        public User? Professor { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
        public virtual ICollection<Enrollment>? Enrollments { get; set; }
        public virtual ICollection<Module>? Modules { get; set; }
        public virtual ICollection<Quiz>? Quizzes { get; set; }
        public virtual ICollection<Review>? Reviews { get; set; }
    }
}
