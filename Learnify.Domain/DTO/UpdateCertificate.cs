using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Learnify.Domain.DTO
{
    public class UpdateCertificate
    {
        public Guid CertificateId { get; set; }
        public Guid StudentId { get; set; }
        public Guid CourseId { get; set; }
        public DateTime IssuedAt { get; set; }
    }
}

