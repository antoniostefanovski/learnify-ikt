using Learnify.Domain.Entities;
using System.Threading.Tasks;

public interface IAuthenticationService
{
    Task<User> RegisterAsync(RegisterUserDto registerUserDto);
    Task<string> LoginAsync(LoginUserDto loginUserDto);
}
