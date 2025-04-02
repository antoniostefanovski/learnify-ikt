using Learnify.Domain.DTO;
using Learnify.Domain.Entities;
using Learnify.Repository.Implementation;
using Learnify.Repository.Interfaces;
using Learnify.Service.Interfaces;
using Learnify.Service.Mappers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Learnify.Service.Implementation
{
    public class LessonService : ILessonService
    {

        private readonly ILessonRepository lessonRepository;

        public LessonService(ILessonRepository lessonRepository)
        {
            this.lessonRepository = lessonRepository;
        }

        public Task DeleteLesson(Guid lessonId)
        {
            var lesson = lessonRepository.Get(lessonId);

            lessonRepository.Delete(lesson);

            return Task.CompletedTask;
        }


        public Lesson GetLesson(Guid lessonId)
        {
            var lesson = lessonRepository.Get(lessonId);

            return lesson;
        }

        public List<Lesson> GetLessons(Guid moduleId)
        {
            var lessons = lessonRepository.GetLessons(moduleId).ToList();

            return lessons;
        }

        public Task InsertLesson(InsertLesson insertLesson)
        {
            var lesson = LessonMapper.CopyFromDto(insertLesson);

            lessonRepository.Insert(lesson);

            return Task.CompletedTask;
        }

        public Task UpdateLesson(UpdateLesson updateLesson)
        {
            var lesson = LessonMapper.CopyFromUpdateDto(updateLesson);

            lessonRepository.Update(lesson);

            return Task.CompletedTask;
        }
    }
}
