using System.Text.Json.Serialization;

namespace Learnify.Domain.Entities
{
    public class Lesson : BaseEntity
    {
        public string Title { get; set; } = string.Empty;
        public string Content { get; set; } = string.Empty;
        public Guid ModuleId { get; set; }
        [JsonIgnore] // Add this attribute
        public Module? Module { get; set; }
        public virtual ICollection<File>? Files { get; set; }
    }
}
