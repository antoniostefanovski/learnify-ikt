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
    public class QuestionService : IQuestionService
    {
        private readonly IQuestionRepository repository;

        public QuestionService(IQuestionRepository repository)
        {
            this.repository = repository;
        }

        public IQueryable<Question> GetAllQuestions()
        {
            return repository.GetAll();
        }

        public Question GetQuestion(Guid questionId)
        {
            var question = repository.Get(questionId);
            return question;
        }

        public Question GetQuestionWithAnswers(Guid questionId)
        {
            var question = repository.GetQuestionWithAnswers(questionId);
            return question;
        }

        public IQueryable<Question> GetQuestionsByQuiz(Guid quizId)
        {
            return repository.GetQuestionsByQuizId(quizId);
        }

        public async Task<List<Question>> GetQuestionsWithAnswersByQuiz(Guid quizId)
        {
            var questions = repository.GetQuestionsWithAnswersByQuizId(quizId);
            return questions;
        }

        public Task InsertQuestion(QuestionRequest questionRequest)
        {
            var question = QuestionMapper.CopyFromDto(questionRequest);
            repository.Insert(question);
            return Task.CompletedTask;
        }

        public Task UpdateQuestion(UpdateQuestion updateQuestion)
        {
            var question = QuestionMapper.CopyFromUpdateDto(updateQuestion);
            repository.Update(question);
            return Task.CompletedTask;
        }

        public Task DeleteQuestion(Guid questionId)
        {
            var question = repository.Get(questionId);
            repository.Delete(question);
            return Task.CompletedTask;
        }
    }
}