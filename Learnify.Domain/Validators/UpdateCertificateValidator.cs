using FluentValidation;
using Learnify.Domain.DTO;

namespace Learnify.Domain.Validators
{
    public class UpdateCertificateValidator : AbstractValidator<UpdateCertificate>
    {
        public UpdateCertificateValidator() 
        {
            RuleFor(x => x.CertificateId)
                .NotEmpty().WithMessage("CertificateId is required.");

            RuleFor(x => x.StudentId)
                .NotEmpty().WithMessage("StudentId is required.");

            RuleFor(x => x.CourseId)
                .NotEmpty().WithMessage("CourseId is required.");

            RuleFor(x => x.IssuedAt)
                .NotEmpty().WithMessage("Issued date is required.")
                .LessThanOrEqualTo(DateTime.UtcNow).WithMessage("Issued date cannot be in the future.");
        }
    }
}
