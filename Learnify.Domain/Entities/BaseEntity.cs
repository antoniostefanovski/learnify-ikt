﻿using System.ComponentModel.DataAnnotations;

namespace Learnify.Domain.Entities
{
    public class BaseEntity
    {
        [Key]
        public Guid Id { get; set; }
    }
}
