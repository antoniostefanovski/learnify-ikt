using Learnify.Domain.DTO;
using Learnify.Service.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Learnify.Web.Controllers
{
    [Route("api/lessons")]
    [ApiController]
    public class LessonController : ControllerBase
    {
        private readonly ILessonService lessonService;

        public LessonController(ILessonService lessonService)
        {
            this.lessonService = lessonService;
        }

        [HttpGet("{moduleId}")]
        public IActionResult GetLessons(Guid moduleId)
        {
            var lessons = lessonService.GetLessons(moduleId);

            return Ok(lessons);
        }

        [HttpGet("{lessonId}/get")]
        public IActionResult GetLesson(Guid lessonId) 
        { 
            var lesson = lessonService.GetLesson(lessonId);

            return Ok(lesson);
        }

        [HttpDelete("{lessonId}")]
        public IActionResult DeleteLesson(Guid lessonId)
        {
            lessonService.DeleteLesson(lessonId);

            return Ok();
        }

        [HttpPost]
        public IActionResult InsertLesson(InsertLesson insertLesson)
        {
            lessonService.InsertLesson(insertLesson);

            return Ok();
        }

        [HttpPut]
        public IActionResult UpdateLesson(UpdateLesson updateLesson)
        {
            lessonService.UpdateLesson(updateLesson);

            return Ok();
        }
    }
}
