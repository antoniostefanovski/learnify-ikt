using Learnify.Domain.DTO;
using Learnify.Domain.Entities;

namespace Learnify.Repository.Interfaces
{
    public interface IEnrollmentRepository : IRepository<Enrollment>
    {
        IQueryable<Enrollment> GetEnrollments(EnrollmentRequest request);
    }
}
