using Learnify.Domain.Entities;
using Learnify.Repository.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Learnify.Repository.Implementation
{
    public class QuestionRepository : Repository<Question>, IQuestionRepository
    {
        private readonly LearnifyDbContext _context;

        public QuestionRepository(LearnifyDbContext context) : base(context)
        {
            _context = context;
        }

        public IQueryable<Question> GetQuestionsByQuizId(Guid quizId)
        {
            return _context.Questions
                .Where(q => q.QuizId == quizId)
                .Include(q => q.Answers)
                .AsQueryable();
        }

        public Question GetQuestionWithAnswers(Guid id)
        {
            return _context.Questions
                .Include(q => q.Answers)
                .FirstOrDefault(q => q.Id == id);
        }

        public List<Question> GetQuestionsWithAnswersByQuizId(Guid quizId)
        {
            return _context.Questions
                .Where(q => q.QuizId == quizId)
                .Include(q => q.Answers)
                .ToList();
        }
    }
}
