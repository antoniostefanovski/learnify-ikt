using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Learnify.Domain.DTO;
using Learnify.Domain.Entities;


namespace Learnify.Service.Interfaces
{
    public interface IReviewService
    {
        Task InsertReview(InsertReview insertReview);
        Task UpdateReview(UpdateReview updateReview);
        Task DeleteReview(Guid reviewId);
        Review GetReview(Guid reviewId);
        List<Review> GetReviewsByCourse(Guid courseId);
    }
}

