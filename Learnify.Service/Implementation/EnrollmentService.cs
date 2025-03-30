using Learnify.Domain.DTO;
using Learnify.Domain.Entities;
using Learnify.Repository.Interfaces;
using Learnify.Service.Interfaces;
using Learnify.Service.Mappers;

namespace Learnify.Service.Implementation
{
    public class EnrollmentService : IEnrollmentService
    {
        private readonly IEnrollmentRepository enrollmentRepository;

        public EnrollmentService(IEnrollmentRepository enrollmentRepository)
        {
            this.enrollmentRepository = enrollmentRepository;
        }

        public Task DeleteEnrollment(Guid enrollmentId)
        {
            var enrollment = enrollmentRepository.Get(enrollmentId);

            enrollmentRepository.Delete(enrollment);

            return Task.CompletedTask;
        }

        public Enrollment GetEnrollment(Guid enrollmentId)
        {
            var enrollment = enrollmentRepository.Get(enrollmentId);

            return enrollment;
        }

        public List<Enrollment> GetEnrollments(EnrollmentRequest request)
        {
            var enrollments = enrollmentRepository.GetEnrollments(request);

            return enrollments.ToList();
        }

        public Task InsertEnrollment(InsertEnrollment insertEnrollment)
        {
            var enrollment = EnrollmentMapper.CopyFromDto(insertEnrollment);

            enrollmentRepository.Insert(enrollment);

            return Task.CompletedTask;
        }

        public Task UpdateEnrollment(UpdateEnrollment updateEnrollment)
        {
            var enrollment = EnrollmentMapper.CopyFromUpdateDto(updateEnrollment);

            enrollmentRepository.Update(enrollment);

            return Task.CompletedTask;
        }
    }
}
