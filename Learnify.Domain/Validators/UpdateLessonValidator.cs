using FluentValidation;
using Learnify.Domain.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Learnify.Domain.Validators
{
    public class UpdateLessonValidator : AbstractValidator<UpdateLesson>
    {
        public UpdateLessonValidator() 
        {
            Include(new InsertLessonValidator());

            RuleFor(x => x.LessonId)
                .NotEqual(Guid.Empty).WithMessage("Lesson ID is required.");
        }
    }
}
