using FluentValidation;
using Learnify.Domain.DTO;

namespace Learnify.Domain.Validators
{
    public class QuizRequestValidator : AbstractValidator<QuizRequest>
    {
        public QuizRequestValidator() 
        {
            RuleFor(x => x.Title)
                .NotEmpty().WithMessage("Quiz title is required.");

            RuleFor(x => x.CourseId)
                .NotEmpty().WithMessage("CourseId is required.");
        }
    }
}
