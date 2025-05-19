namespace Learnify.Service.Interface
{
    public interface IGpt2Service
    {
        Task<string> GetGpt2ResponseAsync(string userInput);
    }
}