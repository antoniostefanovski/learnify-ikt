using Learnify.Domain.DTO;
using Learnify.Service.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Learnify.Web.Controllers
{
    [Route("api/reviews")]
    [ApiController]
    public class ReviewController : ControllerBase
    {
        private readonly IReviewService reviewService;

        public ReviewController(IReviewService reviewService)
        {
            this.reviewService = reviewService;
        }

        [HttpGet("course/{courseId}")]
        public IActionResult GetReviews(Guid courseId)
        {
            var reviews = reviewService.GetReviewsByCourse(courseId);
            
            return Ok(reviews);

        }

        [HttpGet("{reviewId}")]
        public IActionResult GetReview(Guid reviewId)
        {
            var review = reviewService.GetReview(reviewId);
            
            return Ok(review);
        }

        [HttpDelete("{reviewId}")]
        public IActionResult DeleteReview(Guid reviewId)
        {
            reviewService.DeleteReview(reviewId);

            return Ok();
        }

        [HttpPut]
        public IActionResult UpdateReview(UpdateReview updateReview)
        {
            reviewService.UpdateReview(updateReview);

            return Ok();
        }

        [HttpPost]
        public IActionResult InsertReview(InsertReview insertReview)
        {
            reviewService.InsertReview(insertReview);

            return Ok();
        }

    }
}
