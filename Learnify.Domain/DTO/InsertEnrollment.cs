using Learnify.Domain.Entities;

namespace Learnify.Domain.DTO
{
    public class InsertEnrollment
    {
        public Guid StudentId { get; set; }
        public Guid CourseId { get; set; }
    }
}
