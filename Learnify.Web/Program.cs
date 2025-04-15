
using Learnify.Domain.Validators;
using Learnify.Repository;
using Learnify.Repository.Implementation;
using Learnify.Repository.Interfaces;
using Learnify.Web.Infrastructure.Startup;
using Microsoft.EntityFrameworkCore;

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
            {  options.UseSqlServer(connectionString);
                options.UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking);
            });


            builder.Services.ConfigureRepositories();
            builder.Services.ConfigureServices();
            builder.Services.ConfigureValidators();

            builder.Services.AddControllers();
            

            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
