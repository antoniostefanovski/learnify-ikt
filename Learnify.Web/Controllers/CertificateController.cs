using Learnify.Domain.DTO;
using Learnify.Service.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Learnify.Web.Controllers
{
    [Route("api/certificate")]
    [ApiController]
    public class CertificateController : ControllerBase
    {
        private readonly ICertificateService certificateService;

        public CertificateController(ICertificateService certificateService)
        {
            this.certificateService = certificateService;
        }

        [HttpGet("{courseId}/course")]
        public IActionResult GetCertificatesByCourse(Guid courseId)
        {
            var certificates = certificateService.GetCertificatesByCourse(courseId);

            return Ok(certificates);
        }

        [HttpGet("{certificateId}")]
        public IActionResult GetCertificate(Guid certificateId)
        {
            var certificate = certificateService.GetCertificate(certificateId);

            return Ok(certificate);
        }

        [HttpGet("{studentId}/student")]
        public IActionResult GetCertificatesByStudent(Guid studentId)
        {
            var certificates = certificateService.GetCertificatesByStudent(studentId);

            return Ok(certificates);
        }

        [HttpPost]
        public async Task<IActionResult> InsertCertificate(InsertCertificate insertCertificate)
        {
            await certificateService.InsertCertificate(insertCertificate);

            return Ok();
        }

        [HttpPut]
        public async Task<IActionResult> UpdateCertificate(UpdateCertificate updateCertificate)
        {
            await certificateService.UpdateCertificate(updateCertificate);

            return Ok();
        }

        [HttpGet("{certificateId}/download")]
        public async Task<IActionResult> DownloadCertificate(Guid certificateId)
        {
            var certificate = await certificateService.DownloadCertificateAsync(certificateId);

            return Ok(certificate);
        }
    }
}
