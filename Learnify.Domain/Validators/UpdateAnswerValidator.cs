using FluentValidation;
using Learnify.Domain.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Learnify.Domain.Validators
{
    public class UpdateAnswerValidator : AbstractValidator<UpdateAnswer>
    {
        public UpdateAnswerValidator() 
        {
            Include(new AnswerRequestValidator());

            RuleFor(x => x.AnswerId)
                .NotEqual(Guid.Empty).WithMessage("Answer ID is required.");
        }
    }
}
