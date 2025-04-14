using Learnify.Repository.Implementation;
using Learnify.Repository.Interfaces;

namespace Learnify.Web.Infrastructure.Startup
{
    public static class RepositoriesConfig
    {
        public static IServiceCollection ConfigureRepositories(this IServiceCollection services)
        {
            services.AddScoped(typeof(IRepository<>), typeof(Repository<>));
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<IAuthRepository, AuthRepository>();
            services.AddScoped<IAnswerRepository, AnswerRepository>();
            services.AddScoped<IEnrollmentRepository, EnrollmentRepository>();
            services.AddScoped<IModuleRepository, ModuleRepository>();
            services.AddScoped<ILessonRepository, LessonRepository>();
            services.AddScoped<IReviewRepository, ReviewRepository>();
            services.AddScoped<ICertificateRepository, CertificateRepository>();

            return services;
        }
    }
}
