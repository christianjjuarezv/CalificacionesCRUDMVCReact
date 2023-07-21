using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace CalificacionesCRUDMVCReact.Models;

public partial class CalificacionesMvcContext : DbContext
{
    public CalificacionesMvcContext()
    {
    }

    public CalificacionesMvcContext(DbContextOptions<CalificacionesMvcContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Alumno> Alumnos { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=(localdb)\\MSSQLLocalDB; Database=CalificacionesMVC;Integrated Security=true");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Alumno>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Alumno__3214EC07099B7366");

            entity.ToTable("Alumno");

            //entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Apellido)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Apellido).HasColumnName("apellido");
            entity.Property(e => e.Calificacion).HasColumnType("decimal(10, 2)");
            entity.Property(e => e.Calificacion).HasColumnName("calificacion");
            entity.Property(e => e.Nombre)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("nombre");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
