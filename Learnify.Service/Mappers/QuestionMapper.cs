using Learnify.Domain.DTO;
using Learnify.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Learnify.Service.Mappers
{
    public static class QuestionMapper
    {
        public static Question CopyFromDto(QuestionRequest questionRequest)
        {
            var question = new Question();
            question.Text = questionRequest.Text;
            question.Type = questionRequest.Type;
            question.QuizId = questionRequest.QuizId;
            return question;
        }

        public static Question CopyFromUpdateDto(UpdateQuestion updateQuestion)
        {
            var question = new Question();
            question.Id = updateQuestion.QuestionId;
            question.Text = updateQuestion.Text;
            question.Type = updateQuestion.Type;
            question.QuizId = updateQuestion.QuizId;
            return question;
        }
    }
}
