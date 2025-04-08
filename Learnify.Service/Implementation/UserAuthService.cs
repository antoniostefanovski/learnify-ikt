using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Learnify.Domain.Entities; // For User entity
using Learnify.Service.Interfaces; // For IUserService interface
using Learnify.Service.Mappers; // For UserMapper
using Learnify.Repository.Interfaces; // For IUserRepository
using System;
using System.Threading.Tasks;

public class UserService : IUserService
{
    private readonly IUserRepository _userRepository;

    public UserService(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }

    public async Task<User> Register(RegisterUserDto registerUserDto)
    {
        // Proverka da vidime dali userot veke postoi
        var existingUser = _userRepository.GetUserByEmail(registerUserDto.Email);
        if (existingUser != null)
        {
            throw new Exception("Email already exists");
        }

        // Map DTO to User entity
        var user = UserMapper.CopyFromDto(registerUserDto);
        // Store the password directly without hashing
        user.Password = registerUserDto.Password;

        // Add async ke go zacuva userot vo DB asinhrono (mislam deka vaka e podobro)
        await _userRepository.AddAsync(user);
        return user; // Ili vrakjame user ili mojme da vraime string "Register Successful" ne sum dovolno iskusen vo .net da znam dali e podobro ednoto od drugoto
    }

    public async Task<string> Login(LoginUserDto loginUserDto)
    {
        // Zemi go userot po mejl i proveri dali vnesol ist password kako sto e zacuvano vo DB
        var user = _userRepository.GetUserByEmail(loginUserDto.Email);
        // Verify the password directly without hashing
        if (user == null || user.Password != loginUserDto.Password)
        {
            throw new Exception("Invalid credentials");
        }

        // Ovde moze da vratime poraka deka uspesno se logiral
        return "Login successful"; 
    }
}