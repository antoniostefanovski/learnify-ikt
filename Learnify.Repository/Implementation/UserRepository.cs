using Learnify.Domain.Entities;
using Learnify.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Learnify.Repository.Implementation
{
    public class UserRepository : Repository<User>, IUserRepository
    {
        private readonly LearnifyDbContext dbContext;
        public UserRepository(LearnifyDbContext dbContext) : base(dbContext)
        {
            this.dbContext = dbContext;
        }

        public User GetUserByEmail(string email)
        {
            return dbContext.Users.FirstOrDefault(x => x.Email == email);
        }
    }
}
