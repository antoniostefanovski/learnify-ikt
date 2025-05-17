using Learnify.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Learnify.Service.Interfaces
{
    public interface ICourseService
    {
        Task<Course> CreateCourseAsync(Course course);
        Task<Course> GetCourseByIdAsync(Guid courseId);
        Task<IEnumerable<Course>> GetAllCoursesAsync();
        Task<Course> UpdateCourseAsync(Course course);
        Task DeleteCourseAsync(Guid courseId);
    }
}
