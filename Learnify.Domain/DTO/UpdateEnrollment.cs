namespace Learnify.Domain.DTO
{
    public class UpdateEnrollment : InsertEnrollment
    {
        public Guid EnrollmentId { get; set; }
        public float Progress { get; set; }
    }
}
