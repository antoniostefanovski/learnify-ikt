using Learnify.Domain.DTO;
using Learnify.Service.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Learnify.Web.Controllers
{
    [Route("api/answers")]
    [ApiController]
    public class AnswerController : ControllerBase
    {
        private readonly IAnswerService answerService;

        public AnswerController(IAnswerService answerService)
        {
            this.answerService = answerService;
        }

        [HttpGet("{questionId}")]
        public IActionResult GetAnswers(Guid questionId)
        {
            var answers = answerService.GetAnswers(questionId);

            return Ok(answers);
        }

        [HttpGet("{answerId}/get")]
        public IActionResult GetAnswer(Guid answerId) 
        {
            var answer = answerService.GetAnswer(answerId);

            return Ok(answer);
        }

        [HttpDelete("{answerId}")]
        public IActionResult DeleteAnswer(Guid answerId) 
        {
            answerService.DeleteAnswer(answerId);

            return Ok();
        }

        [HttpPost]
        public IActionResult InsertAnswer(AnswerRequest answerRequest)
        {
            answerService.InsertAnswer(answerRequest);

            return Ok();
        }

        [HttpPut]
        public IActionResult UpdateAnswer(UpdateAnswer updateAnswer)
        {
            answerService.UpdateAnswer(updateAnswer);

            return Ok();
        }
    }

}
