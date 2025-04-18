using Learnify.Domain.DTO;
using Learnify.Domain.Entities;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly IAuthenticationService _authService;

    public AuthController(IAuthenticationService authService)
    {
        _authService = authService;
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
            return Ok(new { token });
        }
        catch (Exception ex)
        {
            return Unauthorized(new { error = ex.Message });
        }
    }
}
