namespace Learnify.Domain.Entities
{
    public class Quiz : BaseEntity
    {
        public string Title { get; set; } = string.Empty;
        public Guid CourseId { get; set; }
        public Course? Course { get; set; }
        public virtual ICollection<Question>? Questions { get; set; }
    }
}
