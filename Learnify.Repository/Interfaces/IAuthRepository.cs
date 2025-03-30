using Learnify.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Learnify.Repository.Interfaces
{
    public interface IAuthRepository
    {
        User Register(User user);
        User Login(string email, string password);
    }
}
