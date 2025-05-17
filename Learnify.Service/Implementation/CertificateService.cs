using Learnify.Domain.DTO;
using Learnify.Domain.Entities;
using Learnify.Repository.Interfaces;
using Learnify.Service.Interfaces;
using Learnify.Service.Mappers;
using QuestPDF.Fluent;
using QuestPDF.Helpers;
using QuestPDF.Infrastructure;

namespace Learnify.Service.Implementation
{
    public class CertificateService : ICertificateService
    {
        private readonly ICertificateRepository certificateRepository;
        private readonly ICourseRepository courseRepository;
        private readonly IUserRepository userRepository;
        private readonly IStaticMediaService staticMediaService;

        public CertificateService(ICertificateRepository certificateRepository,
                                  ICourseRepository courseRepository,
                                  IUserRepository userRepository,
                                  IStaticMediaService staticMediaService)
        {
            this.certificateRepository = certificateRepository;
            this.courseRepository = courseRepository;
            this.userRepository = userRepository;
            this.staticMediaService = staticMediaService;
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

     
        public async Task<byte[]> DownloadCertificateAsync(Guid courseId)
        {

            Course course = await courseRepository.GetCourseByIdAsync(courseId);
            if (course == null)
                throw new ArgumentException("Course not found.", nameof(courseId));

            byte[] pdfBytes;
            try
            {
                pdfBytes = GenerateCertificatePdf(course);
            }
            catch (Exception ex)
            {
            
                throw new Exception("An error occurred while generating the certificate PDF.", ex);
            }

            return await Task.FromResult(pdfBytes);
        }


        private byte[] GenerateCertificatePdf(Course course)
        {
            var professor = userRepository.Get(course.ProfessorId);

            var finkiLogo = staticMediaService.GetFinkiLogo();
            var learnifyLogo = staticMediaService.GetLearnifyLogo();

            var document = Document.Create(container =>
            {
                container.Page(page =>
                {
                    page.Margin(50);
                    page.Size(PageSizes.A4);


                    page.Header().Row(row =>
                    {
                        row.ConstantItem(150).Image(finkiLogo);
                        row.ConstantItem(150).Image(learnifyLogo);
                    });

                    page.Content().Column(column =>
                    {
                        column.Spacing(20);

                        
                        string studentName = professor.Name;
                        string courseTitle = course!.Title;
                        DateTime issuedDate = DateTime.Now;

                        column.Item().AlignCenter().Text("Learnify IKT")
                           .FontSize(24).Bold();

                        column.Item().AlignCenter().Text("Certificate of Completion")
                            .FontSize(20).Bold();

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
                        column.Item().Text($"Issued on: {issuedDate:dd MMM yyyy}")
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
