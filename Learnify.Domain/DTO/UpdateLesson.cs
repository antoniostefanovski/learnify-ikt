using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Learnify.Domain.DTO
{
    public class UpdateLesson : InsertLesson
    {
        public Guid LessonId { get; set; }
    }
}
