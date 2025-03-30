using Learnify.Domain.DTO;
using Learnify.Domain.Entities;
using Learnify.Repository.Interfaces;
using Learnify.Service.Interfaces;
using Learnify.Service.Mappers;
using Microsoft.EntityFrameworkCore;

namespace Learnify.Service.Implementation
{
    public class AnswerService : IAnswerService
    {
        private readonly IAnswerRepository repository;

        public AnswerService(IAnswerRepository repository)
        {
            this.repository = repository;
        }

        public Task DeleteAnswer(Guid answerId)
        {
            var answer = repository.Get(answerId);
            repository.Delete(answer);

            return Task.CompletedTask;
        }

        public Answer GetAnswer(Guid answerId)
        {
            var answer = repository.Get(answerId);

            return answer;
        }

        public async Task<List<Answer>> GetAnswers(Guid questionId)
        {
            var answers = await repository.GetAnswersAsync(questionId).ToListAsync();

            return answers;
        }

        public Task InsertAnswer(AnswerRequest answerRequest)
        {
            var answer = AnswerMapper.CopyFromDto(answerRequest);

            repository.Insert(answer);

            return Task.CompletedTask;
        }

        public Task UpdateAnswer(UpdateAnswer updateAnswer)
        {
            var answer = AnswerMapper.CopyFromUpdateDto(updateAnswer);

            repository.Update(answer);

            return Task.CompletedTask;
        }
    }
}
