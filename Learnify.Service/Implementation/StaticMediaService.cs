using Learnify.Service.Interfaces;
using System.Reflection;

namespace Learnify.Service.Implementation
{
    public class StaticMediaService : IStaticMediaService
    {
        private const string MediaRoot = "CertificateMedia";
        private const string DefaultNamespace = "Learnify.Service";
        private readonly Assembly _assembly = Assembly.GetExecutingAssembly();

        public byte[] GetFinkiLogo() => GetEmbeddedResource("FINKI_Logo.jpg");
        public byte[] GetLearnifyLogo() => GetEmbeddedResource("Logo.png");

        private byte[] GetEmbeddedResource(string fileName)
        {
            var resourceName = $"{DefaultNamespace}.{MediaRoot}.{fileName}";

            using var stream = _assembly.GetManifestResourceStream(resourceName);

            if (stream == null)
            {
                throw new FileNotFoundException(
                    $"Embedded resource not found: {resourceName}. " +
                    "Verify the file exists and is set as Embedded Resource.");
            }

            using var memoryStream = new MemoryStream();
            stream.CopyTo(memoryStream);
            return memoryStream.ToArray();
        }
    }
}