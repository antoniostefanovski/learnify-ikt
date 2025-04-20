using Learnify.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Learnify.Repository.Interfaces
{
    public interface IQuestionRepository : IRepository<Question>
    {
        IQueryable<Question> GetQuestionsByQuizId(Guid quizId);
        Question GetQuestionWithAnswers(Guid id);
        List<Question> GetQuestionsWithAnswersByQuizId(Guid quizId);
    }
}

