using Azure.Core;
using Learnify.Domain.DTO;
using Learnify.Domain.Entities;
using Learnify.Repository.Interfaces;
using Learnify.Service.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

[ApiController]
[Route("api/[controller]")]
public class CourseController : ControllerBase
{
    private readonly ICourseService _courseService;
    private readonly IUserRepository userRepository;

    public CourseController(ICourseService courseService, IUserRepository userRepository)
    {
        _courseService = courseService;
        this.userRepository = userRepository;
    }

    [HttpPost("create")]
    public async Task<IActionResult> CreateCourse([FromBody] CreateCourseRequest request)
    {
        try
        {
            Guid professorId = Guid.Parse("7E1F38EF-8229-4813-14EA-08DD90A13A4F");
            var addcourse = new Course
            {
                Title = request.CourseName,
                Description = request.CourseDescription,
                ProfessorId = professorId,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
                
            };

            var createdCourse = await _courseService.CreateCourseAsync(addcourse);

          
            return Ok(createdCourse);
        }
        catch (Exception ex)
        {
            return BadRequest(new { error = ex.Message });
        }
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetCourseById(Guid id)
    {
        try
        {
            var course = await _courseService.GetCourseByIdAsync(id);
            if (course == null)
            {
                return NotFound(new { error = "Course not found" });
            }
            return Ok(course);
        }
        catch (Exception ex)
        {
            return BadRequest(new { error = ex.Message });
        }
    }

    [HttpGet]
    public async Task<IActionResult> GetAllCourses()
    {
        try
        {
            var courses = await _courseService.GetAllCoursesAsync();
            return Ok(courses);
        }
        catch (Exception ex)
        {
            return BadRequest(new { error = ex.Message });
        }
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateCourse(Guid id, [FromBody] CreateCourseRequest request)
    {
        try
        {

            var addcourse = new Course
            {
                Id = id,
                Title = request.CourseName,
                Description = request.CourseDescription,
                ProfessorId = Guid.Parse("2A0BD94B-F2AF-49F1-DFF5-08DD95347C3E"),
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow

            };

            var updatedCourse = await _courseService.UpdateCourseAsync(addcourse);


            return Ok(updatedCourse);
        }
        catch (Exception ex)
        {
            return BadRequest(new { error = ex.Message });
        }
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteCourse(Guid id)
    {
        try
        {
            await _courseService.DeleteCourseAsync(id);
            return NoContent();
        }
        catch (Exception ex)
        {
            return NotFound(new { error = ex.Message });
        }
    }
}
