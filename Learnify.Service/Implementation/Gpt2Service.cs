using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;
using Learnify.Service.Interface;

namespace Learnify.Service.Implementation
{
    public class Gpt2Service : IGpt2Service
    {
        private readonly HttpClient _httpClient;
        private readonly string _apiKey = "HUGGING_FACE_API_KEY_REPLACE";
        private const string HuggingFaceApiUrl = "https://router.huggingface.co/nebius/v1/chat/completions";

        public Gpt2Service(HttpClient httpClient)
        {
            _httpClient = httpClient;
            _httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", _apiKey);
        }

        public async Task<string> GetGpt2ResponseAsync(string userInput)
        {
            var payload = new
            {
                provider = "nebius",
                model = "Qwen/Qwen2.5-Coder-32B-Instruct",
                messages = new[]
                {
            new { role = "user", content = userInput }
        }
            };

            var json = JsonSerializer.Serialize(payload);
            var content = new StringContent(json, Encoding.UTF8, "application/json");

            var response = await _httpClient.PostAsync("https://router.huggingface.co/nebius/v1/chat/completions", content);
            response.EnsureSuccessStatusCode();

            var resultJson = await response.Content.ReadAsStringAsync();

            using var doc = JsonDocument.Parse(resultJson);
            var choice = doc.RootElement.GetProperty("choices")[0];
            var message = choice.GetProperty("message").GetProperty("content").GetString();

            return message ?? "No response.";
        }

    }

    public class Gpt2Response
    {
        public string GeneratedText { get; set; }
    }
}
