using Learnify.Domain.DTO;
using Learnify.Domain.Entities;

namespace Learnify.Service.Interfaces
{
    public interface IModuleService
    {
        Task InsertModule(InsertModule insertModule);
        Task UpdateModule(UpdateModule updateModule);
        Task DeleteModule(Guid moduleId);
        Module GetModule(Guid moduleId);
        List<Module> GetModules(Guid courseId);
    }
}
