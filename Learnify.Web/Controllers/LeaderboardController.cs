using Learnify.Domain.DTO;
using Learnify.Service.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Learnify.Web.Controllers
{
    [Route("api/leaderboard")]
    [ApiController]
    public class LeaderboardController : ControllerBase
    {
        private readonly ILeaderboardService leaderboardService;

        public LeaderboardController(ILeaderboardService leaderboardService)
        {
            this.leaderboardService = leaderboardService;
        }

        [HttpGet]
        public IActionResult GetLeaderboard()
        {
            var leaderboard = leaderboardService.GetLeaderboard();

            return Ok(leaderboard);
        }
        
    }
}
