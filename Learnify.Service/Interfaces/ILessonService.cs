using Learnify.Domain.DTO;
using Learnify.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Learnify.Service.Interfaces
{
    public interface ILessonService
    {
        Task InsertLesson(InsertLesson insertLesson);
        Task UpdateLesson(UpdateLesson updateLesson);
        Task DeleteLesson(Guid lessonId);
        Lesson GetLesson(Guid lessonId);
        List<Lesson> GetLessons(Guid moduleId);
    }
}
