using Learnify.Domain.Entities;

namespace Learnify.Repository.Interfaces
{
    public interface IModuleRepository : IRepository<Module>
    {
        IQueryable<Module> GetModules(Guid courseId);
    }
}
