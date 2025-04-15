using System.ComponentModel.DataAnnotations;

namespace Learnify.Domain.DTO
{
    public class AnswerRequest
    {
        public string AnswerText { get; set; } = string.Empty;
        public bool IsCorrect { get; set; }
        public Guid QuestionId { get; set; }
    }
}
