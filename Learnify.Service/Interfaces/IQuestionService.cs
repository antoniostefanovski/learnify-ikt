using Learnify.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Learnify.Domain.DTO;
namespace Learnify.Service.Interfaces
{
    public interface IQuestionService
    {
        IQueryable<Question> GetAllQuestions();
        Question GetQuestion(Guid questionId);
        Question GetQuestionWithAnswers(Guid questionId);
        IQueryable<Question> GetQuestionsByQuiz(Guid quizId);
        Task<List<Question>> GetQuestionsWithAnswersByQuiz(Guid quizId);
        Task InsertQuestion(QuestionRequest questionRequest);
        Task UpdateQuestion(UpdateQuestion updateQuestion);
        Task DeleteQuestion(Guid questionId);
    }
}
