import { useState } from 'react'
import Buscador from './componentes/Buscador'
import Formulario from './componentes/Formulario'
import Listado from './componentes/Listado'
import Alert from './componentes/Alert'
import { BaseColaboradores } from './BaseColaboradores'


function App() {
  const [listaColaboradores, setListaColaboradores] = useState(BaseColaboradores)
  const [busqueda, setBusqueda] = useState('')
  const [mensaje, setMensaje] = useState({
    msg: '',
    color: '',
  })
  
  const agregarColaboradores = (nuevoColaborador) => {
    setListaColaboradores([...listaColaboradores, nuevoColaborador])
  }

  const mostrarValidacion = (mensajeValidacion) => {
    setMensaje(mensajeValidacion)
  }

  const guardarId = (colaboradorId) => {
    const nuevaLista = listaColaboradores.filter(colaborador => colaborador.id != colaboradorId)
    setListaColaboradores(nuevaLista)
  }
  
  const aplicarBusqueda = listaColaboradores.filter((colaborador) => {
    return (
        colaborador.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        colaborador.correo.toLowerCase().includes(busqueda.toLowerCase()) ||
        colaborador.edad.includes(busqueda.toString()) ||
        colaborador.cargo.toLowerCase().includes(busqueda.toLowerCase()) ||
        colaborador.telefono.includes(busqueda.toString())
        )
  })
  
  return (
    <>
      <div className="container-fluid d-flex gap-4 justify-content-start mt-3 flex-wrap" style={{maxWidth: "80rem"}}>
        <div>

          <Formulario
            colaboradores={agregarColaboradores}
            validacion={mostrarValidacion}
          />
          <Alert 
            mensaje = {mensaje.msg}
            color = {mensaje.color} 
          />
        </div>
        <div className="flex-grow-1">
          <Buscador
            busqueda={busqueda}
            setBusqueda={setBusqueda}
          />
          <Listado 
            colaboradores={aplicarBusqueda}
            enviarId={guardarId}  
          />
        </div>
      </div>
    </>
  )
}

export default App
