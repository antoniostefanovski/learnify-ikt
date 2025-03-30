using Learnify.Service.Implementation;
using Learnify.Service.Interfaces;

namespace Learnify.Web.Infrastructure.Startup
{
    public static class ServicesConfig
    {
        public static IServiceCollection ConfigureServices(this IServiceCollection services)
        {
            services.AddScoped<IAnswerService, AnswerService>();
            services.AddScoped<ILeaderboardService, LeaderboardService>();
            services.AddScoped<IEnrollmentService, EnrollmentService>();

            return services;
        }
    }
}
