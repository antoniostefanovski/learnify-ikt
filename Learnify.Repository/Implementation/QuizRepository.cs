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
    public class QuizRepository : Repository<Quiz>, IQuizRepository
    {
        private readonly LearnifyDbContext _context;

        public QuizRepository(LearnifyDbContext context) : base(context)
        {
            _context = context;
        }

        public IQueryable<Quiz> GetQuizzesByCourseId(Guid courseId)
        {
            return _context.Quizzes
                .Where(q => q.CourseId == courseId)
                .AsQueryable();
        }

        public Quiz GetQuizWithQuestions(Guid id)
        {
            return _context.Quizzes
                .Include(q => q.Questions)
                .FirstOrDefault(q => q.Id == id);
        }
    }
}