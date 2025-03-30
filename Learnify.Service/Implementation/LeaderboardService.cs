using Learnify.Domain.Entities;
using Learnify.Repository.Interfaces;
using Learnify.Service.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Learnify.Service.Implementation
{
    public class LeaderboardService : ILeaderboardService
    {
        private readonly IRepository<Leaderboard> leaderboardRepository;

        public LeaderboardService(IRepository<Leaderboard> leaderboardRepository)
        {
            this.leaderboardRepository = leaderboardRepository;
        }

        public async Task<List<Leaderboard>> GetLeaderboard()
        {
            var leaderboard = await leaderboardRepository.GetAll().ToListAsync();

            leaderboard.OrderByDescending(x => x.Points);

            return leaderboard;
        }


    }
}
