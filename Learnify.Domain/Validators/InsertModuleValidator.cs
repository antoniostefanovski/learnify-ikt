using FluentValidation;
using Learnify.Domain.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Learnify.Domain.Validators
{
    public class InsertModuleValidator : AbstractValidator<InsertModule>
    {
        public InsertModuleValidator() 
        {
            RuleFor(x => x.Title)
                .NotEmpty().WithMessage("Module Title is required.")
                .MaximumLength(100).WithMessage("Title can't be longer than 100 characters.");

            RuleFor(x => x.CourseId)
                .NotEqual(Guid.Empty).WithMessage("Course ID is required.");

            RuleFor(x => x.Order)
                .GreaterThanOrEqualTo(1).WithMessage("Order must be at least 1.");
        }
    }
}
