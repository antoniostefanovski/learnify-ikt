﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Learnify.Domain.DTO
{
    public class InsertCertificate
    {
        public Guid StudentId { get; set; }
        public Guid CourseId { get; set; }
    }
}
