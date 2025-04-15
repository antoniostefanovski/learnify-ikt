using FluentValidation;
using Learnify.Domain.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Learnify.Domain.Validators
{
    public class InsertLessonValidator : AbstractValidator<InsertLesson>
    {
        public InsertLessonValidator() 
        {
            RuleFor(x => x.Title)
                .NotEmpty().WithMessage("Lesson Title is required.")
                .MaximumLength(100).WithMessage("Title can't be longer than 100 characters.");

            RuleFor(x => x.Content)
                .NotEmpty().WithMessage("Lesson content is required");

            RuleFor(x => x.ModuleId)
                .NotEqual(Guid.Empty).WithMessage("Module ID is required.");
        }
    }
}
