using Learnify.Domain.Entities;
using System;
using System.Linq;

namespace Learnify.Repository.Interfaces
{
    public interface ICertificateRepository : IRepository<Certificate>
    {
        IQueryable<Certificate> GetCertificatesByCourse(Guid courseId);
        IQueryable<Certificate> GetCertificatesByStudent(Guid studentId);
        Certificate FindCertificateByCourse(Guid courseId);
    }
}
