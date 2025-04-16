using FluentValidation;
using Learnify.Domain.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Learnify.Domain.Validators
{
    public class AnswerRequestValidator : AbstractValidator<AnswerRequest>
    {
        public AnswerRequestValidator() 
        {
            RuleFor(x => x.AnswerText)
                .NotEmpty().WithMessage("Answer Text is required.");

            RuleFor(x => x.QuestionId)
                .NotEqual(Guid.Empty).WithMessage("Question ID is required.");

            RuleFor(x => x.IsCorrect)
                .NotNull().WithMessage("Is Correct is required.");


        }
    }
}
