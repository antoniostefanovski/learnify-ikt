using Learnify.Domain.Entities;
using Learnify.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Learnify.Repository.Implementation
{
    public class LessonRepository : Repository<Lesson>, ILessonRepository
    {

        private readonly LearnifyDbContext dbContext;

        public LessonRepository(LearnifyDbContext dbContext) : base(dbContext)
        {
            this.dbContext = dbContext;
        }

        public IQueryable<Lesson> GetLessons(Guid moduleId)
        {
            var lessons = GetAll().Where(x => x.ModuleId == moduleId).AsQueryable();

            return lessons;
        }
    }
}
