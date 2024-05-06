import { useState } from "react";

const Buscador = ({busqueda , setBusqueda}) => {

    const guardarBusqueda = (e) => {
        setBusqueda(e.target.value)
    }
    
    return(
        <> 
            <input 
            type="text"
            className="form-control mb-3"
            placeholder="Buscar Colaborador"
            onChange={guardarBusqueda}
            value={busqueda}
            />
        </>
    );
};

export default Buscador