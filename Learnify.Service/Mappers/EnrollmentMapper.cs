using Learnify.Domain.DTO;
using Learnify.Domain.Entities;

namespace Learnify.Service.Mappers
{
    public static class EnrollmentMapper
    {
        public static Enrollment CopyFromDto(InsertEnrollment insertEnrollment)
        {
            var enrollment = new Enrollment();
            enrollment.CourseId = insertEnrollment.CourseId;
            enrollment.StudentId = insertEnrollment.StudentId;
            enrollment.Progress = 0;
            enrollment.EnrolledAt = DateTime.Now;

            return enrollment;
        }

        public static Enrollment CopyFromUpdateDto(UpdateEnrollment updateEnrollment)
        {
            var enrollment = new Enrollment();
            enrollment.Id = updateEnrollment.EnrollmentId;
            enrollment.CourseId = updateEnrollment.CourseId;
            enrollment.StudentId = updateEnrollment.StudentId;
            enrollment.Progress = updateEnrollment.Progress;

            return enrollment;
        }
    }
}
