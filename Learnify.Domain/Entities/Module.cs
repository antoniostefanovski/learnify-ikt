using System.Text.Json.Serialization;

namespace Learnify.Domain.Entities
{
    public class Module : BaseEntity
    {
        public string Title { get; set; } = string.Empty;
        public Guid CourseId { get; set; }
        [JsonIgnore] // Add this attribute
        public Course? Course { get; set; }
        public int Order {  get; set; }
        public virtual ICollection<Lesson>? Lessons { get; set; }
    }
}
