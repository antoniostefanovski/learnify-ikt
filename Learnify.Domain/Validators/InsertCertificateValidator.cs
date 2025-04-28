using FluentValidation;
using Learnify.Domain.DTO;

namespace Learnify.Domain.Validators
{
    public class InsertCertificateValidator : AbstractValidator<InsertCertificate>
    {
        public InsertCertificateValidator() 
        {
            RuleFor(x => x.StudentId)
                .NotEmpty().WithMessage("StudentId is required.");

            RuleFor(x => x.CourseId)
                .NotEmpty().WithMessage("CourseId is required.");
        }
    }
}
