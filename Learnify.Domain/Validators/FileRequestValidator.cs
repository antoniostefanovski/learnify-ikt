using FluentValidation;
using Learnify.Domain.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Learnify.Domain.Validators
{
    public class FileRequestValidator : AbstractValidator<FileRequest>
    {
        public FileRequestValidator() 
        {
            RuleFor(x => x.FileName)
                .NotEmpty().WithMessage("File name is required.")
                .MaximumLength(100).WithMessage("File name must be 100 characters or less");

            RuleFor(x => x.FileUrl)
                .NotEmpty().WithMessage("File URL is required.")
                .Must(url => Uri.IsWellFormedUriString(url, UriKind.Absolute))
                .WithMessage("Invalid URL format.");

            RuleFor(x => x.LessonId)
                .NotEqual(Guid.Empty).WithMessage("Lesson ID is required.");
        }
    }
}
