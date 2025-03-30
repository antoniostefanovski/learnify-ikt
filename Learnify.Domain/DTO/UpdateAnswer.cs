using System.ComponentModel.DataAnnotations;

namespace Learnify.Domain.DTO
{
    public class UpdateAnswer : AnswerRequest
    {
        [Required(ErrorMessage = "Answer Id is required")]
        public Guid AnswerId { get; set; }
    }
}
