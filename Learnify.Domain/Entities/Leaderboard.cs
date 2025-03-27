namespace Learnify.Domain.Entities
{
    public class Leaderboard : BaseEntity
    {
        public double Points { get; set; }
        public int Rank { get; set; }
        public Guid StudentId { get; set; }
        public User? Student { get; set; }
    }
}
