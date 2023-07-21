import {Button,Table } from "reactstrap"
const TablaAlumno = ({data,setEditar,mostrarModal,setMostrarModal,eliminarAlumno}) => {
    const enviarDatos = (alumno) => {
        setEditar(alumno)
        setMostrarModal(!mostrarModal)
    }
    return (
        <Table striped responsive>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Calificación</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    (data.length < 1) ? (
                        <tr>
                            <td colSpan="4" className="bg-secondary text-light">NO EXISTEN ALUMNOS REGISTRADOS</td>
                        </tr>
                    ) : (
                            data.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.nombre}</td>
                                    <td>{item.apellido}</td>
                                    <td>{item.calificacion}</td>
                                    <td>
                                        <Button color="warning" size="sm" className="me-2" onClick={()=>enviarDatos(item)}>Editar</Button>
                                        <Button color="danger" size="sm" onClick={()=>eliminarAlumno(item.id)}>Eliminar</Button>
                                    </td>
                                </tr>
                        ))
                    )
                }
            </tbody>
        </Table>
    )
}
export default TablaAlumno;