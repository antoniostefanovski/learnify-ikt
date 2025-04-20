using Learnify.Domain.DTO;
using Learnify.Service.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Learnify.Web.Controllers
{
    [Route("api/quizzes")]
    [ApiController]
    public class QuizController : ControllerBase
    {
        private readonly IQuizService quizService;

        public QuizController(IQuizService quizService)
        {
            this.quizService = quizService;
        }

        [HttpGet]
        public IActionResult GetQuizzes()
        {
            var quizzes = quizService.GetAllQuizzes();
            return Ok(quizzes);
        }

        [HttpGet("{quizId}")]
        public IActionResult GetQuiz(Guid quizId)
        {
            var quiz = quizService.GetQuiz(quizId);
            return Ok(quiz);
        }

        [HttpGet("{quizId}/questions")]
        public IActionResult GetQuizWithQuestions(Guid quizId)
        {
            var quiz = quizService.GetQuizWithQuestions(quizId);
            return Ok(quiz);
        }

        [HttpGet("course/{courseId}")]
        public IActionResult GetQuizzesByCourse(Guid courseId)
        {
            var quizzes = quizService.GetQuizzesByCourse(courseId);
            return Ok(quizzes);
        }

        [HttpPost]
        public IActionResult InsertQuiz(QuizRequest quizRequest)
        {
            quizService.InsertQuiz(quizRequest);
            return Ok();
        }

        [HttpPut]
        public IActionResult UpdateQuiz(UpdateQuiz updateQuiz)
        {
            quizService.UpdateQuiz(updateQuiz);
            return Ok();
        }

        [HttpDelete("{quizId}")]
        public IActionResult DeleteQuiz(Guid quizId)
        {
            quizService.DeleteQuiz(quizId);
            return Ok();
        }
    }
}