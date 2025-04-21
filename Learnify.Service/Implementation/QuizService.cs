using Learnify.Domain.DTO;
using Learnify.Domain.Entities;
using Learnify.Repository.Interfaces;
using Learnify.Service.Interfaces;
using Learnify.Service.Mappers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Learnify.Service.Implementation
{
    public class QuizService : IQuizService
    {
        private readonly IQuizRepository repository;

        public QuizService(IQuizRepository repository)
        {
            this.repository = repository;
        }

        public IQueryable<Quiz> GetAllQuizzes()
        {
            return repository.GetAll();
        }

        public Quiz GetQuiz(Guid quizId)
        {
            var quiz = repository.Get(quizId);
            return quiz;
        }

        public Quiz GetQuizWithQuestions(Guid quizId)
        {
            var quiz = repository.GetQuizWithQuestions(quizId);
            return quiz;
        }

        public IQueryable<Quiz> GetQuizzesByCourse(Guid courseId)
        {
            var quizzes = repository.GetQuizzesByCourseId(courseId);
            return quizzes;
        }

        public Task InsertQuiz(QuizRequest quizRequest)
        {
            var quiz = QuizMapper.CopyFromDto(quizRequest);
            repository.Insert(quiz);
            return Task.CompletedTask;
        }

        public Task UpdateQuiz(UpdateQuiz updateQuiz)
        {
            var quiz = QuizMapper.CopyFromUpdateDto(updateQuiz);
            repository.Update(quiz);
            return Task.CompletedTask;
        }

        public Task DeleteQuiz(Guid quizId)
        {
            var quiz = repository.Get(quizId);
            repository.Delete(quiz);
            return Task.CompletedTask;
        }
    }
}