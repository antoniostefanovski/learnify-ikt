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
        private readonly IRepository<Answer> answerRepository;
        private readonly IAnswerRepository repository;

        public AnswerService(IRepository<Answer> answerRepository, IAnswerRepository repository)
        {
            this.answerRepository = answerRepository;
            this.repository = repository;
        }

        public Task DeleteAnswer(Guid answerId)
        {
            var answer = answerRepository.Get(answerId);
            answerRepository.Delete(answer);

            return Task.CompletedTask;
        }

        public Answer GetAnswer(Guid answerId)
        {
            var answer = answerRepository.Get(answerId);

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

            answerRepository.Insert(answer);

            return Task.CompletedTask;
        }

        public Task UpdateAnswer(UpdateAnswer updateAnswer)
        {
            var answer = AnswerMapper.CopyFromUpdateDto(updateAnswer);

            answerRepository.Update(answer);

            return Task.CompletedTask;
        }
    }
}
