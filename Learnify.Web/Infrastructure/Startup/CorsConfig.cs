namespace Learnify.Web.Infrastructure.Startup
{
    public static class CorsConfig
    {
        public static IServiceCollection ConfigureCors(this IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy("AllowLocalhost5173",
                    builder => builder
                                     .WithOrigins("http://localhost:5173")
                                     .AllowAnyMethod()
                                     .AllowAnyHeader()
                                     .AllowCredentials());
            });

            return services;
        }
    }
}
