using Learnify.Domain.DTO;
using Learnify.Domain.Entities;
using Learnify.Repository.Interfaces;
using Learnify.Service.Interfaces;
using Learnify.Service.Mappers;
using QuestPDF.Fluent;
using QuestPDF.Helpers;
using QuestPDF.Infrastructure;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Learnify.Service.Implementation
{
    public class CertificateService : ICertificateService
    {
        private readonly ICertificateRepository certificateRepository;

        public CertificateService(ICertificateRepository certificateRepository)
        {
            this.certificateRepository = certificateRepository;
        }

        public async Task InsertCertificate(InsertCertificate insertCertificate)
        {
            var certificate = CertificateMapper.CopyFromDto(insertCertificate);
            certificateRepository.Insert(certificate);
            await Task.CompletedTask;
        }

        public async Task UpdateCertificate(UpdateCertificate updateCertificate)
        {
            var certificate = CertificateMapper.CopyFromUpdateDto(updateCertificate);
            certificateRepository.Update(certificate);
            await Task.CompletedTask;
        }

        public async Task DeleteCertificate(Guid certificateId)
        {
            var certificate = certificateRepository.Get(certificateId);
            certificateRepository.Delete(certificate);
            await Task.CompletedTask;
        }

        public Certificate GetCertificate(Guid certificateId)
        {
            return certificateRepository.Get(certificateId);
        }

        public List<Certificate> GetCertificatesByCourse(Guid courseId)
        {
            return certificateRepository.GetCertificatesByCourse(courseId).ToList();
        }

        public List<Certificate> GetCertificatesByStudent(Guid studentId)
        {
            return certificateRepository.GetCertificatesByStudent(studentId).ToList();
        }

     
        public async Task<byte[]> DownloadCertificateAsync(Guid certificateId)
        {

            Certificate certificate = certificateRepository.Get(certificateId);
            if (certificate == null)
                throw new ArgumentException("Certificate not found.", nameof(certificateId));

            byte[] pdfBytes;
            try
            {
                pdfBytes = GenerateCertificatePdf(certificate);
            }
            catch (Exception ex)
            {
            
                throw new Exception("An error occurred while generating the certificate PDF.", ex);
            }

            return await Task.FromResult(pdfBytes);
        }


        private byte[] GenerateCertificatePdf(Certificate certificate)
        {
  
            var document = Document.Create(container =>
            {
                container.Page(page =>
                {
                    page.Margin(50);
                    page.Size(PageSizes.A4);

                   
                    page.Header().AlignCenter().Text("Certificate of Completion")
                        .FontSize(24)
                        .Bold();

                    
                    page.Content().Column(column =>
                    {
                        column.Spacing(20);

                        
                        string studentName = certificate.Student != null ? certificate.Student.Name : "Student Name";
                        string courseTitle = certificate.Course != null ? certificate.Course.Title : "Course Title";

                        column.Item().Text("This certificate is presented to:")
                            .FontSize(16);
                        column.Item().Text(studentName)
                            .FontSize(20)
                            .Bold();
                        column.Item().Text("For successfully completing the course:")
                            .FontSize(16);
                        column.Item().Text(courseTitle)
                            .FontSize(20)
                            .Bold();
                        column.Item().Text($"Issued on: {certificate.IssuedAt:dd MMM yyyy}")
                            .FontSize(14);
                    });

                
                    page.Footer().AlignCenter().Text("Congratulations!")
                        .FontSize(16)
                        .Italic();
                });
            });

       
            byte[] pdfBytes = document.GeneratePdf();

            return pdfBytes;
        }
    }
}
