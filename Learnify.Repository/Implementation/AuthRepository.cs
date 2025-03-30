using Learnify.Domain.Entities;
using Learnify.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Learnify.Repository.Implementation
{
    public class AuthRepository : IAuthRepository
    {
        private readonly IUserRepository userRepository;

        public AuthRepository(IUserRepository userRepository)
        {
            this.userRepository = userRepository;
        }


        public User Login(string email, string password)
        {
            var user = userRepository.GetUserByEmail(email);
            if (user == null || user.Password != password)
            {
                throw new Exception("Invalid email or password.");
            }

            return user;
        }


        public User Register(User user)
        {
            var existingUser = userRepository.GetUserByEmail(user.Email);
            if (existingUser != null)
            {
                throw new Exception("User with this email already exists.");
            }

            return userRepository.Insert(user);

        }
    }
}
