using Learnify.Domain.DTO;
using Learnify.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Learnify.Service.Interfaces
{
    public interface ICertificateService
    {
    
        Task InsertCertificate(InsertCertificate insertCertificate);
        Task UpdateCertificate(UpdateCertificate updateCertificate);
        Task DeleteCertificate(Guid certificateId);


        Certificate GetCertificate(Guid certificateId);
        List<Certificate> GetCertificatesByCourse(Guid courseId);
        List<Certificate> GetCertificatesByStudent(Guid studentId);

     
        Task<byte[]> DownloadCertificateAsync(Guid certificateId);
    }
}
