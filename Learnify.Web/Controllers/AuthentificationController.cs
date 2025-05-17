using Learnify.Domain.DTO;
using Learnify.Domain.Entities;
using Learnify.Repository.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

[ApiController]
[Route("api/auth")]
public class AuthController : ControllerBase

{
    private readonly IUserRepository _userRepository;
    private readonly IAuthenticationService _authService;

    public AuthController(IAuthenticationService authService, IUserRepository userRepository)
    {
        _authService = authService;
        _userRepository = userRepository;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] RegisterUserDto registerUserDto)
    {
        try
        {
            var newUser = await _authService.RegisterAsync(registerUserDto);
            return Ok(new { message = "User registered successfully", userId = newUser.Id });
        }
        catch (Exception ex)
        {
            return BadRequest(new { error = ex.Message });
        }
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginUserDto loginUserDto)
    {
    
        try
        {
            var token = await _authService.LoginAsync(loginUserDto);

            // Get user information to return to the client
            var user = _userRepository.GetUserByEmail(loginUserDto.Email);
            var userResponse = new
            {
                id = user.Id,
                name = user.Name,
                email = user.Email,
                role = user.Role.ToString(),
                token = token
            };

            return Ok(userResponse);
        }
        catch (Exception ex)
        {
            return Unauthorized(new { error = ex.Message });
        }
    }
}
