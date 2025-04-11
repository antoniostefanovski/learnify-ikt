using Learnify.Domain.Entities;
using Learnify.Repository.Interfaces;
using System;
using System.Linq;

namespace Learnify.Repository.Implementation
{
    public class ReviewRepository : Repository<Review>, IReviewRepository
    {
        private readonly LearnifyDbContext dbContext;

        public ReviewRepository(LearnifyDbContext dbContext) : base(dbContext)
        {
            this.dbContext = dbContext;
        }

        public IQueryable<Review> GetReviewsByCourse(Guid courseId)
        {
            return GetAll().Where(r => r.CourseId == courseId).AsQueryable();
        }
    }
}
