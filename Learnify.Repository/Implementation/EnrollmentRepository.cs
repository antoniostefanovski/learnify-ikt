using Learnify.Domain.DTO;
using Learnify.Domain.Entities;
using Learnify.Domain.Enums;
using Learnify.Repository.Interfaces;

namespace Learnify.Repository.Implementation
{
    public class EnrollmentRepository : Repository<Enrollment>, IEnrollmentRepository
    {
        private readonly LearnifyDbContext context;

        public EnrollmentRepository(LearnifyDbContext context) : base(context)
        {
            this.context = context;
        }

        public IQueryable<Enrollment> GetEnrollments(EnrollmentRequest request)
        {
            var enrollments = GetAll().AsQueryable();

            if (request.Type == SearchEnrollmentType.StudentId)
            {
                return enrollments.Where(x => x.StudentId == request.StudentId);
            }

            if (request.Type == SearchEnrollmentType.CourseId)
            {
                return enrollments.Where(x => x.CourseId == request.CourseId);
            }

            return enrollments.Where(x => x.Id == request.EnrollmentId);
        }
    }
}
