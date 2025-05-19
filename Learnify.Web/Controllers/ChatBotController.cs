using Microsoft.AspNetCore.Mvc;
using Learnify.Service.Interface;

namespace Learnify.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ChatbotController : ControllerBase
    {
        private readonly IGpt2Service _gpt2Service;

        public ChatbotController(IGpt2Service gpt2Service)
        {
            _gpt2Service = gpt2Service;
        }

        [HttpPost("message")]
        public async Task<IActionResult> PostMessage([FromBody] string message)
        {
            if (string.IsNullOrWhiteSpace(message))
                return BadRequest("Message cannot be empty.");

            var response = await _gpt2Service.GetGpt2ResponseAsync(message);
            return Ok(response);
        }
    }
}
