﻿using System.Text.Json.Serialization;

namespace Learnify.Domain.Entities
{
    public class Answer : BaseEntity
    {
        public string Text { get; set; } = string.Empty;
        public bool IsCorrect { get; set; }
        public Guid QuestionId { get; set; }
        [JsonIgnore] // Add this attribute
        public Question? Question { get; set; }
    }
}
