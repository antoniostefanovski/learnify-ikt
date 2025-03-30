using Learnify.Domain.DTO;
using Learnify.Domain.Entities;

namespace Learnify.Service.Mappers
{
    public static class AnswerMapper
    {
        public static Answer CopyFromDto(AnswerRequest answerRequest)
        {
            var answer = new Answer();
            answer.Text = answerRequest.AnswerText;
            answer.QuestionId = answerRequest.QuestionId;
            answer.IsCorrect = answerRequest.IsCorrect;

            return answer;
        }

        public static Answer CopyFromUpdateDto(UpdateAnswer updateAnswer)
        {
            var answer = new Answer();
            answer.Id = updateAnswer.AnswerId;
            answer.Text = updateAnswer.AnswerText;
            answer.QuestionId = updateAnswer.QuestionId;
            answer.IsCorrect = updateAnswer.IsCorrect;

            return answer;
        }
    }
}
