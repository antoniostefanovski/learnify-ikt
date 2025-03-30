using Learnify.Domain.DTO;
using Learnify.Domain.Entities;

namespace Learnify.Service.Interfaces
{
    public interface IAnswerService
    {
        Task InsertAnswer(AnswerRequest answerRequest);
        Task DeleteAnswer(Guid answerId);
        Task UpdateAnswer(UpdateAnswer updateAnswer);
        Task<List<Answer>> GetAnswers(Guid questionId);
        Answer GetAnswer(Guid answerId);
    }
}
