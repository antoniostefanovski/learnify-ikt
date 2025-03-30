using Learnify.Domain.Entities;

namespace Learnify.Repository.Interfaces
{
    public interface IAnswerRepository
    {
        IQueryable<Answer> GetAnswersAsync(Guid questionId);
    }
}
