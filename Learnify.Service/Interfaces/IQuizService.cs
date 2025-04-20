using Learnify.Domain.DTO;
using Learnify.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Learnify.Service.Interfaces
{
    public interface IQuizService
    {
        IQueryable<Quiz> GetAllQuizzes();
        Quiz GetQuiz(Guid quizId);
        Quiz GetQuizWithQuestions(Guid quizId);
        IQueryable<Quiz> GetQuizzesByCourse(Guid courseId);
        Task InsertQuiz(QuizRequest quizRequest);
        Task UpdateQuiz(UpdateQuiz updateQuiz);
        Task DeleteQuiz(Guid quizId);
    }
}
