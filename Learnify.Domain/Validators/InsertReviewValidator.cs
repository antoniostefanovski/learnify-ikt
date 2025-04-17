using FluentValidation;
using Learnify.Domain.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Learnify.Domain.Validators
{
    public class InsertReviewValidator : AbstractValidator<InsertReview>
    {
        public InsertReviewValidator() 
        {
            RuleFor(x => x.Rating)
                .InclusiveBetween(1.0, 5.0)
                .WithMessage("Rating must be between 1 and 5.");

            RuleFor(x => x.Comment)
                .NotEmpty().WithMessage("Comment is required.")
                .MaximumLength(500).WithMessage("Comment cannot exceed 500 characters.");

            RuleFor(x => x.UserId)
                .NotEqual(Guid.Empty).WithMessage("User ID is required.");

            RuleFor(x => x.CourseId)
                .NotEqual(Guid.Empty).WithMessage("Course ID is required.");
        }
    }
}
