﻿using FluentValidation;

namespace Learnify.Domain.Validators
{
    public class LoginValidator : AbstractValidator<LoginUserDto>
    {
        public LoginValidator() 
        {
            RuleFor(x => x.Email)
                .NotEmpty().WithMessage("Email is required.")
                .EmailAddress().WithMessage("Invalid email format.");

            RuleFor(x => x.Password)
                .NotEmpty().WithMessage("Password is required.")
                .MinimumLength(6).WithMessage("Password must be at least 6 characters long.");
        }
    }
}
