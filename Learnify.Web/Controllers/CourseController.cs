using Learnify.Domain.DTO;
using Learnify.Domain.Entities;
using Learnify.Service.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

[ApiController]
[Route("api/[controller]")]
public class CourseController : ControllerBase
{
    private readonly ICourseService _courseService;

    public CourseController(ICourseService courseService)
    {
        _courseService = courseService;
    }

    [HttpPost("create")]
    public async Task<IActionResult> CreateCourse([FromBody] Course course)
    {
        try
        {
            var createdCourse = await _courseService.CreateCourseAsync(course);
            return Ok(new { message = "Course created successfully", courseId = createdCourse.Id });
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
    public async Task<IActionResult> UpdateCourse(Guid id, [FromBody] Course course)
    {
        if (id != course.Id)
        {
            return BadRequest(new { error = "Course ID mismatch" });
        }

        try
        {
            await _courseService.UpdateCourseAsync(course);
            return NoContent();
        }
        catch (Exception ex)
        {
            return NotFound(new { error = ex.Message });
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
