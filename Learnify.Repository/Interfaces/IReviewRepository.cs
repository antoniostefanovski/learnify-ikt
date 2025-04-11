using Learnify.Domain.Entities;
using System;
using System.Linq;

namespace Learnify.Repository.Interfaces
{
    public interface IReviewRepository : IRepository<Review>
    {
        IQueryable<Review> GetReviewsByCourse(Guid courseId);
    }
}
