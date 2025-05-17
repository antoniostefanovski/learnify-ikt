using Learnify.Domain.Entities;
using Learnify.Repository.Interfaces;
using Learnify.Service.Interfaces;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Learnify.Service.Implementation
{
    public class CourseService : ICourseService
    {
        private readonly ICourseRepository _courseRepository;

        public CourseService(ICourseRepository courseRepository)
        {
            _courseRepository = courseRepository;
        }

        public async Task<Course> CreateCourseAsync(Course course)
        {

            var existingCourse = await _courseRepository.GetCourseByIdAsync(course.Id);
            if (existingCourse != null)
                throw new Exception("Course with this ID already exists!");


            return await _courseRepository.CreateCourseAsync(course);
        }

        public async Task<Course> GetCourseByIdAsync(Guid courseId)
        {
            return await _courseRepository.GetCourseByIdAsync(courseId);
        }

        public async Task<IEnumerable<Course>> GetAllCoursesAsync()
        {
            return await _courseRepository.GetAllCoursesAsync();
        }

        

        public async Task DeleteCourseAsync(Guid courseId)
        {

            var course = await _courseRepository.GetCourseByIdAsync(courseId);
            if (course == null)
                throw new Exception("Course not found!");

            await _courseRepository.DeleteCourseAsync(courseId);
        }

        public async Task<Course> UpdateCourseAsync(Course course)
        {
            var existingCourse = await _courseRepository.GetCourseByIdAsync(course.Id);
            if (existingCourse == null)
                throw new Exception("Course not found!");

            return  await _courseRepository.UpdateCourseAsync(course);
            
        }
    }
}
