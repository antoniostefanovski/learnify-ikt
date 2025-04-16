using FluentValidation;
using Learnify.Domain.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Learnify.Domain.Validators
{
    public class InsertEnrollmentValidator : AbstractValidator<InsertEnrollment>
    {
        public InsertEnrollmentValidator() 
        {
            RuleFor(x => x.StudentId)
                .NotEqual(Guid.Empty).WithMessage("Student ID is required.");

            RuleFor(x => x.CourseId)
                .NotEqual(Guid.Empty).WithMessage("Course ID is required.");
        }
    }
}
