using Learnify.Domain.Entities;

namespace Learnify.Repository.Interfaces
{
    public interface IAnswerRepository : IRepository<Answer>
    {
        IQueryable<Answer> GetAnswersAsync(Guid questionId);
    }
}
