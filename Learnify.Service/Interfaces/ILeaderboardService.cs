using Learnify.Domain.Entities;

namespace Learnify.Service.Interfaces
{
    public interface ILeaderboardService
    {
        Task<List<Leaderboard>> GetLeaderboard();
    }
}
