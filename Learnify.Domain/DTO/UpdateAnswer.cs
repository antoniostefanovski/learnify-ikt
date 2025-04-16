using System.ComponentModel.DataAnnotations;

namespace Learnify.Domain.DTO
{
    public class UpdateAnswer : AnswerRequest
    {
        public Guid AnswerId { get; set; }
    }
}
