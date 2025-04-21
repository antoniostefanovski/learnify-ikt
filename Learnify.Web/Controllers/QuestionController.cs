using Learnify.Domain.DTO;
using Learnify.Service.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Learnify.Web.Controllers
{
    [Route("api/questions")]
    [ApiController]
    public class QuestionController : ControllerBase
    {
        private readonly IQuestionService questionService;

        public QuestionController(IQuestionService questionService)
        {
            this.questionService = questionService;
        }

        [HttpGet]
        public IActionResult GetQuestions()
        {
            var questions = questionService.GetAllQuestions();
            return Ok(questions);
        }

        [HttpGet("{questionId}")]
        public IActionResult GetQuestion(Guid questionId)
        {
            var question = questionService.GetQuestion(questionId);
            return Ok(question);
        }

        [HttpGet("{questionId}/answers")]
        public IActionResult GetQuestionWithAnswers(Guid questionId)
        {
            var question = questionService.GetQuestionWithAnswers(questionId);
            return Ok(question);
        }

        [HttpGet("quiz/{quizId}")]
        public IActionResult GetQuestionsByQuiz(Guid quizId)
        {
            var questions = questionService.GetQuestionsByQuiz(quizId);
            return Ok(questions);
        }

        [HttpGet("quiz/{quizId}/withanswers")]
        public IActionResult GetQuestionsWithAnswersByQuiz(Guid quizId)
        {
            var questions = questionService.GetQuestionsWithAnswersByQuiz(quizId);
            return Ok(questions);
        }

        [HttpPost]
        public IActionResult InsertQuestion(QuestionRequest questionRequest)
        {
            questionService.InsertQuestion(questionRequest);
            return Ok();
        }

        [HttpPut]
        public IActionResult UpdateQuestion(UpdateQuestion updateQuestion)
        {
            questionService.UpdateQuestion(updateQuestion);
            return Ok();
        }

        [HttpDelete("{questionId}")]
        public IActionResult DeleteQuestion(Guid questionId)
        {
            questionService.DeleteQuestion(questionId);
            return Ok();
        }
    }
}