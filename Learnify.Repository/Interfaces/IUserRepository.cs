using Learnify.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Learnify.Repository.Interfaces
{
    public interface IUserRepository : IRepository<User>
    {
        User GetUserByEmail(string email);
        Task<User> AddAsync(User user);
    }
}
