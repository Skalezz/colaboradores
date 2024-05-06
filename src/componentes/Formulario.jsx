import { useState } from "react";

const Formulario = ({colaboradores, validacion}) => {
    const [nuevoColaborador, setNuevoColaborador] = useState(
        {
            id: '',
            nombre: '',
            correo: '',
            edad: '',
            cargo: '',
            telefono: ''
        }
    )
    
    const generarId = () => {
        const d = new Date()
        return d.getHours() + d.getMinutes() + d.getSeconds()
    }

    const validarForm = (e) => {
        e.preventDefault()
        if (nuevoColaborador.nombre == '' || nuevoColaborador.correo == '' || nuevoColaborador.edad == '' || nuevoColaborador.cargo == '' || nuevoColaborador.telefono == ''){
            validacion({
                msg:'Debe rellenar todos los campos',
                color:'danger'
            })
            return
        }else if (nuevoColaborador.nombre !== '' && nuevoColaborador.correo !== '' && nuevoColaborador.edad !== '' && nuevoColaborador.cargo !== '' && nuevoColaborador.telefono !== ''){
            if (!/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(nuevoColaborador.correo)) {
                validacion({
                    msg:'El correo no es válido',
                    color:'danger'
                })
                return
            }
        }
        validacion({
            msg:'Colaborador ingresado con éxito',
            color:'success'
        })
        colaboradores(nuevoColaborador)
        setNuevoColaborador(
            {
                id: '',
                nombre: '',
                correo: '',
                edad: '',
                cargo: '',
                telefono: ''
            }
        )
    }

    return (
        <> 
            <h2>Agregar Colaborador</h2>
            <form onSubmit={validarForm}>
                <div className="form-group mb-3">
                    <input
                    placeholder="Nombre del colaborador"
                    className="form-control"
                    name="nombreColaborador"
                    type="text"
                    onChange={(e) => setNuevoColaborador(
                        {
                            ...nuevoColaborador,
                            id: generarId(),
                            nombre: e.target.value,            
                        }
                    )}
                    value={nuevoColaborador.nombre}
                    ></input>
                </div>
                <div className="form-group mb-3">
                    <input
                    placeholder="Email del colaborador"
                    className="form-control"
                    name="emailColarador"
                    type="text"
                    onChange={(e) => setNuevoColaborador(
                        {
                            ...nuevoColaborador,
                            correo: e.target.value,            
                        }
                    )}
                    value={nuevoColaborador.correo}
                    ></input>
                </div>
                <div className="form-group mb-3">
                    <input
                    placeholder="Edad del colaborador"
                    className="form-control"
                    name="edadColaborador"
                    type="number"
                    onChange={(e) => setNuevoColaborador(
                        {
                            ...nuevoColaborador,
                            edad: e.target.value,            
                        }
                    )}
                    value={nuevoColaborador.edad}
                    ></input>
                </div>
                <div className="form-group mb-3">
                    <input
                    placeholder="Cargo del colaborador"
                    className="form-control"
                    name="cargoColaborador"
                    type="text"
                    onChange={(e) => setNuevoColaborador(
                        {
                            ...nuevoColaborador,
                            cargo: e.target.value,            
                        }
                    )}
                    value={nuevoColaborador.cargo}
                    ></input>
                </div>
                <div className="form-group mb-3">
                    <input
                    placeholder="Telefono del colaborador"
                    className="form-control"
                    name="telefonoColaborador"
                    type="number"
                    onChange={(e) => setNuevoColaborador(
                        {
                            ...nuevoColaborador,
                            telefono: e.target.value,            
                        }
                    )}
                    value={nuevoColaborador.telefono}
                    ></input>
                </div>
                <div className="d-grid">
                    <button className="btn btn-primary" type="submit">Registrarse</button>
                </div>
            </form>
        </>
    );
};

export default Formulario