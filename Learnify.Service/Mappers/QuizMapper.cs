using Learnify.Domain.DTO;
using Learnify.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Learnify.Service.Mappers
{
    public static class QuizMapper
    {
        public static Quiz CopyFromDto(QuizRequest quizRequest)
        {
            var quiz = new Quiz();
            quiz.Title = quizRequest.Title;
            quiz.CourseId = quizRequest.CourseId;
            return quiz;
        }

        public static Quiz CopyFromUpdateDto(UpdateQuiz updateQuiz)
        {
            var quiz = new Quiz();
            quiz.Id = updateQuiz.QuizId;
            quiz.Title = updateQuiz.Title;
            quiz.CourseId = updateQuiz.CourseId;
            return quiz;
        }
    }
}