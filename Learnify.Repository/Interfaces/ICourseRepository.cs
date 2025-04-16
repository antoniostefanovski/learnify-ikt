using Learnify.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Learnify.Repository.Interfaces
{
    public interface ICourseRepository
    {
        Task<Course> CreateCourseAsync(Course course);
        Task<Course> GetCourseByIdAsync(Guid courseId);
        Task<IEnumerable<Course>> GetAllCoursesAsync();
        Task UpdateCourseAsync(Course course);
        Task DeleteCourseAsync(Guid courseId);
    }
}
