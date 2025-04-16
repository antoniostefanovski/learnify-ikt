using Learnify.Domain.Entities;
using Learnify.Repository.Interfaces;
using Microsoft.Extensions.Configuration;
using BCrypt.Net;  
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.Threading.Tasks;

public class AuthenticationService : IAuthenticationService
{
    private readonly IUserRepository _userRepository;
    private readonly IConfiguration _configuration;

    
    public AuthenticationService(IUserRepository userRepository, IConfiguration configuration)
    {
        _userRepository = userRepository;
        _configuration = configuration;
    }

   
    public async Task<User> RegisterAsync(RegisterUserDto registerUserDto)
    {
        
        var existingUser = _userRepository.GetUserByEmail(registerUserDto.Email);
        if (existingUser != null)
            throw new Exception("User with this email already exists!");

        
        var hashedPassword = BCrypt.Net.BCrypt.HashPassword(registerUserDto.Password);

        
        var newUser = new User
        {
            Name = registerUserDto.Name,
            Email = registerUserDto.Email,
            Password = hashedPassword,
            PhoneNumber = registerUserDto.PhoneNumber,
            Address = registerUserDto.Address,
            City = registerUserDto.City,
            Gender = registerUserDto.Gender
        };

        
        await _userRepository.AddAsync(newUser);

        
        return newUser;
    }

    
    public async Task<string> LoginAsync(LoginUserDto loginUserDto)
    {
        
        var user = _userRepository.GetUserByEmail(loginUserDto.Email);
        if (user == null)
            throw new Exception("Invalid credentials!");

        
        if (!BCrypt.Net.BCrypt.Verify(loginUserDto.Password, user.Password))
            throw new Exception("Invalid credentials!");

        
        var tokenHandler = new JwtSecurityTokenHandler(); 
        var key = Encoding.ASCII.GetBytes(_configuration["Jwt:SecretKey"]); 

        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(new Claim[]
            {
                new Claim(ClaimTypes.Name, user.Id.ToString()), 
                new Claim(ClaimTypes.Email, user.Email),       
            }),
            Expires = DateTime.UtcNow.AddHours(1), 
            SigningCredentials = new SigningCredentials(
                new SymmetricSecurityKey(key), 
                SecurityAlgorithms.HmacSha256Signature 
            )
        };
        
       
        var token = tokenHandler.CreateToken(tokenDescriptor);
        return tokenHandler.WriteToken(token);  
    }
}
