using Learnify.Domain.DTO;

namespace Learnify.Service.Interfaces
{
    public interface IFileService
    {
        Task InsertFile(FileRequest request);
    }
}
