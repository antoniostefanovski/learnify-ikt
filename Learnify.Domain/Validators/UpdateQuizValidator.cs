using FluentValidation;
using Learnify.Domain.DTO;

namespace Learnify.Domain.Validators
{
    public class UpdateQuizValidator : AbstractValidator<UpdateQuiz>
    {
        public UpdateQuizValidator() 
        {
            RuleFor(x => x.QuizId)
                .NotEmpty().WithMessage("QuizId is required.");

            RuleFor(x => x.Title)
                .NotEmpty().WithMessage("Quiz title is required.");

            RuleFor(x => x.CourseId)
                .NotEmpty().WithMessage("CourseId is required.");
        }
    }
}
