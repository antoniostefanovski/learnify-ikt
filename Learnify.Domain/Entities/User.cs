using Learnify.Domain.Enums;

namespace Learnify.Domain.Entities
{
    public class User : BaseEntity
    {
        public string Name { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public string PhoneNumber { get; set; } = string.Empty;
        public string Address { get; set; } = string.Empty;
        public string City { get; set; } = string.Empty;
        public string Gender { get; set; } = string.Empty;
        public byte[]? ProfilePicture { get; set; }
        public DateTime RegistrationTime { get; set; } = DateTime.UtcNow;
        public UserRole Role { get; set; }
        public virtual ICollection<Course>? Courses { get; set; }
        public virtual ICollection<Enrollment>? Enrollments { get; set; }
        public virtual ICollection<Review>? Reviews { get; set; }
    }
}
