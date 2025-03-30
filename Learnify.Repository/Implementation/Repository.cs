using Learnify.Domain.Entities;
using Learnify.Repository.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Learnify.Repository.Implementation
{
    public class Repository<T> : IRepository<T> where T : BaseEntity
    {
        private readonly LearnifyDbContext dbContext;
        private readonly DbSet<T> entities;


        public Repository(LearnifyDbContext dbContext)
        {
            this.dbContext = dbContext;
            this.entities = dbContext.Set<T>();
        }


        public T Delete(T entity)
        {
            if (entity == null)
            {
                throw new ArgumentNullException(nameof(entity));
            }

            entities.Remove(entity);
            dbContext.SaveChanges();

            return entity;
        }


        public T Get(Guid? id)
        {
            if (id == null)
            {
                return null;
            }

            return entities.FirstOrDefault(e => e.Id == id);
        }


        public IQueryable<T> GetAll()
        {
            return entities.AsQueryable();
        }


        public T Insert(T entity)
        {
            if (entity == null)
            {
                throw new ArgumentNullException(nameof(entity));
            }

            entities.Add(entity);
            dbContext.SaveChanges();

            return entity;
        }


        public T Update(T entity)
        {
            if (entity == null)
            {
                throw new ArgumentNullException(nameof(entity));
            }

            entities.Update(entity);
            dbContext.SaveChanges();

            return entity;
        }
    }
}
