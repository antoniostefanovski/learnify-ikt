
using Learnify.Domain.Validators;
using Learnify.Repository;
using Learnify.Repository.Implementation;
using Learnify.Repository.Interfaces;
using Learnify.Web.Infrastructure.Startup;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Learnify.Service.Implementation;
using Learnify.Service.Interfaces;
using Microsoft.AspNetCore.Cors.Infrastructure;

namespace Learnify.Web
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);


            var connectionString =
                builder.Configuration.GetConnectionString("LearnifyDbConnection")
                ?? throw new InvalidOperationException("Connection string"
                + "'LearnifyDbConnection' not found.");


            builder.Services.AddDbContext<LearnifyDbContext>(options =>
            {
                options.UseSqlServer(connectionString);
                options.UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking);
            });

            builder.Services.AddScoped<IAuthenticationService, AuthenticationService>();
            //builder.Services.AddScoped<ICourseRepository, CourseRepository>();
            //builder.Services.AddScoped<ICourseService, CourseService>();

            builder.Services.ConfigureRepositories();
            builder.Services.ConfigureServices();
            builder.Services.ConfigureValidators();

            builder.Services.AddControllers();


            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();


            var jwtSettings = builder.Configuration.GetSection("Jwt");
            var secretKey = jwtSettings["SecretKey"];

            builder.Services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(options =>
            {
                options.RequireHttpsMetadata = true;
                options.SaveToken = true;
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey))
                };
            });

            var app = builder.Build();

            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();
            app.UseAuthentication();
            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
