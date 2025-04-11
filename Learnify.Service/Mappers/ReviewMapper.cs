using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Learnify.Domain.DTO;
using Learnify.Domain.Entities;
using System;

namespace Learnify.Service.Mappers
{
    public static class ReviewMapper
    {
        public static Review CopyFromDto(InsertReview dto)
        {
            return new Review
            {
                Rating = dto.Rating,
                Comment = dto.Comment,
                UserId = dto.UserId,
                CourseId = dto.CourseId,        
                ReviewdOn = DateTime.UtcNow
            };
        }

        public static Review CopyFromUpdateDto(UpdateReview dto)
        {
            return new Review
            {

                Id = dto.ReviewId,
                Rating = dto.Rating,
                Comment = dto.Comment,
                UserId = dto.UserId,
                CourseId = dto.CourseId,
                ReviewdOn = dto.ReviewdOn
            };
        }
    }
}

