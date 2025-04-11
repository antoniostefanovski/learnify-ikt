using Learnify.Domain.DTO;
using Learnify.Service.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Learnify.Web.Controllers
{
    [Route("api/modules")]
    [ApiController]
    public class ModuleController : ControllerBase
    {
        private readonly IModuleService moduleService;

        public ModuleController(IModuleService moduleService)
        {
            this.moduleService = moduleService;
        }

        [HttpGet("{courseId}")]
        public IActionResult GetModules(Guid courseId)
        {
            var modules = moduleService.GetModules(courseId);

            return Ok(modules);
        }

        [HttpGet("{moduleId}/get")]
        public IActionResult GetModule(Guid moduleId)
        {
            var module = moduleService.GetModule(moduleId);

            return Ok(module);
        }

        [HttpDelete("{moduleId}")]
        public IActionResult DeleteModule(Guid moduleId)
        {
            moduleService.DeleteModule(moduleId);

            return Ok();
        }

        [HttpPost]
        public IActionResult InsertModule(InsertModule insertModule)
        {
            moduleService.InsertModule(insertModule);

            return Ok();
        }

        [HttpPut]
        public IActionResult UpdateModule(UpdateModule updateModule)
        {
            moduleService.UpdateModule(updateModule);

            return Ok();
        }
    }
}
