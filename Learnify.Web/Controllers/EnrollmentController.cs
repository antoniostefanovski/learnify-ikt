using Learnify.Domain.DTO;
using Learnify.Service.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Learnify.Web.Controllers
{
    [Route("api/enrollments")]
    [ApiController]
    public class EnrollmentController : ControllerBase
    {
        private readonly IEnrollmentService enrollmentService;

        public EnrollmentController(IEnrollmentService enrollmentService)
        {
            this.enrollmentService = enrollmentService;
        }

        [HttpPost("get")]
        public IActionResult GetEnrollments(EnrollmentRequest request)
        {
            var enrollments = enrollmentService.GetEnrollments(request);

            return Ok(enrollments);
        }

        [HttpGet("{enrollmentId}")]
        public IActionResult GetEnrollment(Guid enrollmentId)
        {
            var enrollment = enrollmentService.GetEnrollment(enrollmentId);

            return Ok(enrollment);
        }

        [HttpDelete("{enrollmentId}")]
        public IActionResult DeleteEnrollment(Guid enrollmentId)
        {
            enrollmentService.DeleteEnrollment(enrollmentId);

            return Ok();
        }

        [HttpPost("insert")]
        public IActionResult InsertEnrollment(InsertEnrollment insertEnrollment)
        {
            enrollmentService.InsertEnrollment(insertEnrollment);

            return Ok();
        }

        [HttpPut]
        public IActionResult UpdateEnrollment(UpdateEnrollment updateEnrollment)
        {
            enrollmentService.UpdateEnrollment(updateEnrollment);

            return Ok();
        }
    }
}
