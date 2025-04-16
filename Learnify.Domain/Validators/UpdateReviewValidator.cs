using FluentValidation;
using Learnify.Domain.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Learnify.Domain.Validators
{
    public class UpdateReviewValidator : AbstractValidator<UpdateReview>
    {
        public UpdateReviewValidator() 
        {
            Include(new InsertReviewValidator());

            RuleFor(x => x.ReviewId)
                .NotEqual(Guid.Empty).WithMessage("Review ID is required.");

            RuleFor(x => x.ReviewdOn)
                .NotEmpty().WithMessage("Review on date is required.")
                .LessThanOrEqualTo(DateTime.Now).WithMessage("Reviewed on date cannot be in the future.");
        }
    }
}
