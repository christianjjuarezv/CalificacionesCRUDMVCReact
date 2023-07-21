import { useState,useEffect } from "react"
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap"
const modeloAlumno={
    id : 0,
    nombre:"",
    apellido : "",
    calificacion:0
}
const ModalAlumno = ({ mostrarModal, setMostrarModal, guardarAlumno,editar,setEditar,editarAlumno }) => {
    const [alumno, setAlumno] = useState(modeloAlumno);

    const actualizaDato = (e) => {
        console.log(e.target.name + ":" + e.target.value)
        setAlumno({
            ...alumno,
            [e.target.name] : e.target.value
        })
    }

    const enviarDatos = () => {
        if (alumno.id==0) {
            guardarAlumno(alumno)
        } else {
            editarAlumno(alumno)
        }
    }

    useEffect(() => {
        if (editar != null) {
            setAlumno(editar)
        } else {
            setAlumno(modeloAlumno)
        }

    },[editar])

    const cerrarModal = () => {
        setMostrarModal(!mostrarModal)
        setEditar(null)
    }

    return (
        <Modal isOpen={mostrarModal}>
            <ModalHeader>
                {alumno.id == 0 ? "Registrar Nuevo Alumno" : "Editar Información de Alumno" }
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Nombre</Label>
                        <Input name="nombre" onChange={(e) => actualizaDato(e)} value={alumno.nombre} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Apellido</Label>
                        <Input name="apellido" onChange={(e) => actualizaDato(e)} value={alumno.apellido} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Calificación</Label>
                        <Input name="calificacion" onChange={(e) => actualizaDato(e)} value={alumno.calificacion} />
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="success" size="sm" onClick={enviarDatos}>Guardar</Button>
                <Button color="danger" size="sm" onClick={cerrarModal }>Cerrar</Button>
            </ModalFooter>
        </Modal>
    )
}
export default ModalAlumno;