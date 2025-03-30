using Learnify.Domain.Entities;
using Learnify.Repository.Interfaces;

namespace Learnify.Repository.Implementation
{
    public class ModuleRepository : Repository<Module>, IModuleRepository
    {
        private readonly LearnifyDbContext context;

        public ModuleRepository(LearnifyDbContext context) : base(context)
        {
            this.context = context;
        }

        public IQueryable<Module> GetModules(Guid courseId)
        {
            var modules = GetAll().Where(x => x.CourseId == courseId).AsQueryable();

            return modules;
        }
    }
}
