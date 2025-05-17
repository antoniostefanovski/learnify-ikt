using Learnify.Repository.Implementation;
using Learnify.Repository.Interfaces;
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
            services.AddScoped<IModuleService, ModuleService>();
            services.AddScoped<IFileService, FileService>();
            services.AddScoped<ILessonService, LessonService>();
            services.AddScoped<IReviewService, ReviewService>();
            services.AddScoped<ICertificateService, CertificateService>();
            services.AddScoped<IQuestionService, QuestionService>();
            services.AddScoped<IQuizService, QuizService>();
            services.AddScoped<IAuthenticationService, AuthenticationService>();
            return services;
        }
    }
}
