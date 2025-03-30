using Learnify.Domain.Entities;
using Learnify.Repository.Interfaces;

namespace Learnify.Repository.Implementation
{
    public class AnswerRepository : Repository<Answer>, IAnswerRepository
    {
        private readonly LearnifyDbContext context;

        public AnswerRepository(LearnifyDbContext context) : base(context)
        {
            this.context = context;
        }

        public IQueryable<Answer> GetAnswersAsync(Guid questionId)
        {
            var answers = context.Answers.Where(x => x.QuestionId == questionId).AsQueryable();

            return answers;
        }
    }
}
