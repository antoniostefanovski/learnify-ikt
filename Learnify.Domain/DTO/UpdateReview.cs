using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Learnify.Domain.DTO
{
    public class UpdateReview : InsertReview
    {
        public Guid ReviewId { get; set; }
        public DateTime ReviewdOn { get; set; }
    }
}
