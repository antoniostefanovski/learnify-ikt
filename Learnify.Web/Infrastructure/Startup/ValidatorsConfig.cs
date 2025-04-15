using FluentValidation;
using Learnify.Domain.DTO;
using Learnify.Domain.Validators;

namespace Learnify.Web.Infrastructure.Startup
{
    public static class ValidatorsConfig
    {
        public static IServiceCollection ConfigureValidators(this IServiceCollection services)
        {
            services.AddScoped<IValidator<AnswerRequest>, AnswerRequestValidator>();
            services.AddScoped<IValidator<EnrollmentRequest>, EnrollmentRequestValidator>();
            services.AddScoped<IValidator<FileRequest>, FileRequestValidator>();
            services.AddScoped<IValidator<InsertEnrollment>, InsertEnrollmentValidator>();
            services.AddScoped<IValidator<InsertLesson>, InsertLessonValidator>();
            services.AddScoped<IValidator<InsertModule>, InsertModuleValidator>();
            services.AddScoped<IValidator<InsertReview>, InsertReviewValidator>();
            services.AddScoped<IValidator<UpdateAnswer>, UpdateAnswerValidator>();
            services.AddScoped<IValidator<UpdateEnrollment>, UpdateEnrollmentValidator>();
            services.AddScoped<IValidator<UpdateLesson>, UpdateLessonValidator>();
            services.AddScoped<IValidator<UpdateModule>, UpdateModuleValidator>();
            services.AddScoped<IValidator<UpdateReview>, UpdateReviewValidator>();



            return services;
        }
    }
}
