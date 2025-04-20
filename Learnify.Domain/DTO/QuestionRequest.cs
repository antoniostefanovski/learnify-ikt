using Learnify.Domain.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Learnify.Domain.DTO
{
    public class QuestionRequest
    {
        public string Text { get; set; } = string.Empty;
        public QuestionType Type { get; set; }
        public Guid QuizId { get; set; }
    }
}
