using FluentValidation;
using FluentValidation.Internal;
using Learnify.Domain.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Learnify.Domain.Validators
{
    public class UpdateEnrollmentValidator : AbstractValidator<UpdateEnrollment>
    {
        public UpdateEnrollmentValidator() 
        {
            Include(new InsertEnrollmentValidator());

            RuleFor(x => x.EnrollmentId)
                .NotEqual(Guid.Empty).WithMessage("Enrollment ID is required.");

            RuleFor(x => x.Progress)
                .InclusiveBetween(0f, 100f).WithMessage("Progress must be between 0 and 100.");
            
        }
    }
}
