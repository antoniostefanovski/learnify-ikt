﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Learnify.Domain.DTO
{
    public class InsertReview
    {
        public double Rating { get; set; }
        public string Comment { get; set; } = string.Empty;
        public Guid UserId { get; set; }
        public Guid CourseId { get; set; }
    }
}

