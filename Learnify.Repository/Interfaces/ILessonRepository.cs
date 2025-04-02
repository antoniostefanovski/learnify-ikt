using Learnify.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Learnify.Repository.Interfaces
{
    public interface ILessonRepository : IRepository<Lesson>
    {
        IQueryable<Lesson> GetLessons(Guid moduleId);
    }
}
