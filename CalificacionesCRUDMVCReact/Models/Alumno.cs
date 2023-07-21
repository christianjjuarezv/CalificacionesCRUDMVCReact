using System;
using System.Collections.Generic;

namespace CalificacionesCRUDMVCReact.Models;

public partial class Alumno
{
    public int Id { get; set; }

    public string? Nombre { get; set; }

    public string? Apellido { get; set; }

    public decimal? Calificacion { get; set; }
}
