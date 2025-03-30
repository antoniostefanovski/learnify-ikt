using Learnify.Domain.DTO;
using Learnify.Domain.Entities;
using Learnify.Repository.Interfaces;
using Learnify.Service.Interfaces;
using Learnify.Service.Mappers;

namespace Learnify.Service.Implementation
{
    public class ModuleService : IModuleService
    {
        private readonly IModuleRepository moduleRepository;

        public ModuleService(IModuleRepository moduleRepository)
        {
            this.moduleRepository = moduleRepository;
        }

        public Task DeleteModule(Guid moduleId)
        {
            var module = moduleRepository.Get(moduleId);

            moduleRepository.Delete(module);

            return Task.CompletedTask;
        }

        public Module GetModule(Guid moduleId)
        {
            var module = moduleRepository.Get(moduleId);

            return module;
        }

        public List<Module> GetModules(Guid courseId)
        {
            var modules = moduleRepository.GetModules(courseId).ToList();

            return modules;
        }

        public Task InsertModule(InsertModule insertModule)
        {
            var module = ModuleMapper.CopyFromDto(insertModule);

            moduleRepository.Insert(module);    

            return Task.CompletedTask;
        }

        public Task UpdateModule(UpdateModule updateModule)
        {
            var module = ModuleMapper.CopyFromUpdateDto(updateModule);

            moduleRepository.Update(module);

            return Task.CompletedTask;
        }
    }
}
