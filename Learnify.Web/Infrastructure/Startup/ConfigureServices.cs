using Learnify.Service.Implementation;
using Learnify.Service.Interfaces;

namespace Learnify.Web.Infrastructure.Startup
{
    public static class ConfigureServices
    {
        public static IServiceCollection ConfigureServices(this IServiceCollection services)
        {
            services.AddScoped<IAnswerService, AnswerService>();
            services.AddScoped<ILeaderboardService, LeaderboardService>();

            return services;
        }
    }
}
