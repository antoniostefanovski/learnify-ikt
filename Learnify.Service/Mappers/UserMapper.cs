using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Learnify.Domain.Entities;

public static class UserMapper
{
    public static User CopyFromDto(RegisterUserDto registerUserDto)
    {
        return new User
        {
            Name = registerUserDto.Name,
            Email = registerUserDto.Email,
            Password = registerUserDto.Password, // Hash In The Service vaka mozda najubo ke e 
            PhoneNumber = registerUserDto.PhoneNumber,
            Address = registerUserDto.Address,
            City = registerUserDto.City,
            Gender = registerUserDto.Gender,
            RegistrationTime = DateTime.UtcNow 
        };
    }
}

