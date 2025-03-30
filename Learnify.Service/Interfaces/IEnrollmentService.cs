using Learnify.Domain.DTO;
using Learnify.Domain.Entities;

namespace Learnify.Service.Interfaces
{
    public interface IEnrollmentService
    {
        Task InsertEnrollment(InsertEnrollment insertEnrollment);
        Task UpdateEnrollment(UpdateEnrollment updateEnrollment);
        Task DeleteEnrollment(Guid enrollmentId);
        Enrollment GetEnrollment(Guid enrollmentId);
        List<Enrollment> GetEnrollments(EnrollmentRequest request);
    }
}
