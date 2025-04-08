using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Learnify.Domain.Entities;
using System.Threading.Tasks;

public interface IUserService
{
    Task<User> Register(RegisterUserDto registerUserDto);
    Task<string> Login(LoginUserDto loginUserDto);

}