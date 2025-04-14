using Learnify.Domain.Entities;
using Learnify.Repository.Interfaces;
using System;
using System.Linq;

namespace Learnify.Repository.Implementation
{
    public class CertificateRepository : Repository<Certificate>, ICertificateRepository
    {
        private readonly LearnifyDbContext dbContext;

        public CertificateRepository(LearnifyDbContext dbContext) : base(dbContext)
        {
            this.dbContext = dbContext;
        }

        public IQueryable<Certificate> GetCertificatesByCourse(Guid courseId)
        {
            return GetAll().Where(c => c.CourseId == courseId).AsQueryable();
        }

        public IQueryable<Certificate> GetCertificatesByStudent(Guid studentId)
        {
            return GetAll().Where(c => c.StudentId == studentId).AsQueryable();
        }
    }
}
