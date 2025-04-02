using Learnify.Domain.DTO;
using Learnify.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Learnify.Service.Mappers
{
    public static class LessonMapper
    {
        public static Lesson CopyFromDto(InsertLesson insertLesson)
        {
            var lesson = new Lesson();
            lesson.ModuleId = insertLesson.ModuleId;
            lesson.Title = insertLesson.Title;
            lesson.Content = insertLesson.Content;

            return lesson;
        }

        public static Lesson CopyFromUpdateDto(UpdateLesson updateLesson)
        {
            var lesson = new Lesson();
            lesson.Id = updateLesson.LessonId;
            lesson.ModuleId = updateLesson.ModuleId;
            lesson.Title = updateLesson.Title;
            lesson.Content = updateLesson.Content;

            return lesson;
        }
    }
}
