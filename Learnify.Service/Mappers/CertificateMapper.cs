using System;
using Learnify.Domain.DTO;
using Learnify.Domain.Entities;

namespace Learnify.Service.Mappers
{
    public static class CertificateMapper
    {
        public static Certificate CopyFromDto(InsertCertificate dto)
        {
            return new Certificate
            {
       
                StudentId = dto.StudentId,
                CourseId = dto.CourseId,
                IssuedAt = DateTime.UtcNow
            };
        }

        public static Certificate CopyFromUpdateDto(UpdateCertificate dto)
        {
            return new Certificate
            {
                Id = dto.CertificateId,
                StudentId = dto.StudentId,
                CourseId = dto.CourseId,
                IssuedAt = dto.IssuedAt
            };
        }
    }
}
