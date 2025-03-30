using Learnify.Domain.DTO;
using Learnify.Domain.Entities;
using Learnify.Repository.Interfaces;
using Learnify.Service.Interfaces;
using Learnify.Service.Mappers;
using File = Learnify.Domain.Entities.File;

namespace Learnify.Service.Implementation
{
    public class FileService : IFileService
    {
        private readonly IRepository<File> repository;

        public FileService(IRepository<File> repository)
        {
            this.repository = repository;
        }

        public Task InsertFile(FileRequest request)
        {
            var file = FileMapper.CopyFromDto(request);

            repository.Insert(file);

            return Task.CompletedTask;
        }
    }
}
