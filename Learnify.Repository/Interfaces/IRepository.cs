
using Learnify.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Learnify.Repository.Interfaces
{
    public interface IRepository<T> where T : BaseEntity
    {
        IQueryable<T> GetAll();
        T Get(Guid? id);
        T Insert(T entity);
        T Update(T entity);
        T Delete(T entity);
    }
}
