using FluentValidation;
using Learnify.Domain.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Learnify.Domain.Validators
{
    public class UpdateModuleValidator : AbstractValidator<UpdateModule>
    {
        public UpdateModuleValidator() 
        {
            Include(new InsertModuleValidator());

            RuleFor(x => x.ModuleId)
                .NotEqual(Guid.Empty).WithMessage("Module ID is required.");
        }
    }
}
