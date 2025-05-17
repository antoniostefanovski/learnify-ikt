using Learnify.Domain.Enums;
using System.Text.Json.Serialization;

namespace Learnify.Domain.Entities
{
    public class Question : BaseEntity
    {
        public string Text { get; set; } = string.Empty;
        public QuestionType Type { get; set; }
        public Guid QuizId { get; set; }
        [JsonIgnore] // Add this attribute
        public Quiz? Quiz { get; set; }
        public virtual ICollection<Answer>? Answers { get; set; }
    }
}
