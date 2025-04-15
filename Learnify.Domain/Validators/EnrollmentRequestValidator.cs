using FluentValidation;
using Learnify.Domain.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Learnify.Domain.Validators
{
    public class EnrollmentRequestValidator : AbstractValidator<EnrollmentRequest>
    {
        public EnrollmentRequestValidator() 
        {
            RuleFor(x => x.EnrollmentId)
                .NotEqual(Guid.Empty)
                .WithMessage("Enrollment ID is required.");

            RuleFor(x => x.StudentId)
                .NotEqual(Guid.Empty)
                .WithMessage("Student ID is required.");

            RuleFor(x => x.CourseId)
                .NotEqual(Guid.Empty)
                .WithMessage("Course ID is required.");

            RuleFor(x => x.Type)
                .IsInEnum()
                .WithMessage("Invalid enrollment type.");
        }
    }
}
