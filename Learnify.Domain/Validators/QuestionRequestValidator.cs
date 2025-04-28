using FluentValidation;
using Learnify.Domain.DTO;

namespace Learnify.Domain.Validators
{
    public class QuestionRequestValidator : AbstractValidator<QuestionRequest>
    {
        public QuestionRequestValidator() 
        {
            RuleFor(x => x.Text)
                .NotEmpty().WithMessage("Question text is required.");

            RuleFor(x => x.Type)
                .IsInEnum().WithMessage("Invalid question type.");

            RuleFor(x => x.QuizId)
                .NotEmpty().WithMessage("QuizId is required.");
        }
    }
}
