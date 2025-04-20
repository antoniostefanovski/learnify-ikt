using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Learnify.Domain.DTO
{
    public class QuizRequest
    {
        public string Title { get; set; } = string.Empty;
        public Guid CourseId { get; set; }
    }
}
