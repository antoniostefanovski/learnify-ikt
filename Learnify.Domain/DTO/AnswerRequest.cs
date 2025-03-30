using System.ComponentModel.DataAnnotations;

namespace Learnify.Domain.DTO
{
    public class AnswerRequest
    {
        [Required(ErrorMessage = "Answer Text is required")]
        public string AnswerText { get; set; } = string.Empty;
        [Required(ErrorMessage = "Is Correct is required")]
        public bool IsCorrect { get; set; }
        [Required(ErrorMessage = "Question Id is required")]
        public Guid QuestionId { get; set; }
    }
}
