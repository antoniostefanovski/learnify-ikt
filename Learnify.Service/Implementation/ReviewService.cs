using Learnify.Domain.DTO;
using Learnify.Domain.Entities;
using Learnify.Repository.Interfaces;
using Learnify.Service.Interfaces;
using Learnify.Service.Mappers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Learnify.Service.Implementation
{
    public class ReviewService : IReviewService
    {
        private readonly IReviewRepository reviewRepository;

        public ReviewService(IReviewRepository reviewRepository)
        {
            this.reviewRepository = reviewRepository;
        }

        public Task InsertReview(InsertReview insertReview)
        {
            var review = ReviewMapper.CopyFromDto(insertReview);
            reviewRepository.Insert(review);
            return Task.CompletedTask;
        }

        public Task UpdateReview(UpdateReview updateReview)
        {
            var review = ReviewMapper.CopyFromUpdateDto(updateReview);
            reviewRepository.Update(review);
            return Task.CompletedTask;
        }

        public Task DeleteReview(Guid reviewId)
        {
            var review = reviewRepository.Get(reviewId);
            reviewRepository.Delete(review);
            return Task.CompletedTask;
        }

        public Review GetReview(Guid reviewId)
        {
            return reviewRepository.Get(reviewId);
        }

        public List<Review> GetReviewsByCourse(Guid courseId)
        {
            return reviewRepository.GetReviewsByCourse(courseId).ToList();
        }
    }
}
