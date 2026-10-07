using Microsoft.EntityFrameworkCore;

namespace EnterpriseRetail.Api.DB_CORE_001;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }
}
