using Learnify.Domain.Enums;

namespace Learnify.Domain.DTO
{
    public class EnrollmentRequest
    {
        public Guid EnrollmentId { get; set; }
        public Guid StudentId { get; set; }
        public Guid CourseId { get; set; }
        public SearchEnrollmentType Type { get; set; }

    }
}
