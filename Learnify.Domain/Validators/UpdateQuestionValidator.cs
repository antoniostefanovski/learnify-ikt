using FluentValidation;

namespace Learnify.Domain.Validators
{
    public class UpdateQuestionValidator : AbstractValidator<UpdateQuestion>
    {
        public UpdateQuestionValidator() 
        {
            RuleFor(x => x.QuestionId)
                .NotEmpty().WithMessage("QuestionId is required.");

            RuleFor(x => x.Text)
                .NotEmpty().WithMessage("Question text is required.");

            RuleFor(x => x.Type)
                .IsInEnum().WithMessage("Invalid question type.");

            RuleFor(x => x.QuizId)
                .NotEmpty().WithMessage("QuizId is required.");
        }
    }
}
