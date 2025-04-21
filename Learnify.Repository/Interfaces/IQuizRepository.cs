using Learnify.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Learnify.Repository.Interfaces
{
    public interface IQuizRepository : IRepository<Quiz>
    {
        IQueryable<Quiz> GetQuizzesByCourseId(Guid courseId);
        Quiz GetQuizWithQuestions(Guid id);
    }
}
