using Learnify.Domain.DTO;
using Learnify.Domain.Entities;

namespace Learnify.Service.Mappers
{
    public static class ModuleMapper
    {
        public static Module CopyFromDto(InsertModule insertModule)
        {
            var module = new Module();
            module.CourseId = insertModule.CourseId;
            module.Order = insertModule.Order;
            module.Title = insertModule.Title;

            return module;
        }

        public static Module CopyFromUpdateDto(UpdateModule updateModule)
        {
            var module = new Module();
            module.Id = updateModule.ModuleId;
            module.CourseId = updateModule.CourseId;
            module.Order = updateModule.Order;
            module.Title = updateModule.Title;

            return module;
        }
    }
}
