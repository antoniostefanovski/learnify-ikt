using Learnify.Domain.DTO;
using Learnify.Domain.Entities;

namespace Learnify.Service.Mappers
{
    public static class FileMapper
    {
        public static Domain.Entities.File CopyFromDto(FileRequest fileRequest)
        {
            var file = new Domain.Entities.File();
            file.FileName = fileRequest.FileName;
            file.FileUrl = fileRequest.FileUrl;
            file.LessonId = fileRequest.LessonId;
            file.UploadedAt = DateTime.Now;

            return file;
        }
    }
}
