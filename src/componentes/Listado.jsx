const Listado = ({colaboradores,enviarId}) => {

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Correo</th>
                    <th scope="col">Edad</th>
                    <th scope="col">Cargo</th>
                    <th scope="col">Telefono</th>
                    <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {colaboradores.map(colaborador =>
                        <tr key={colaborador.id}>
                            <td>{colaborador.nombre}</td>
                            <td>{colaborador.correo}</td>
                            <td>{colaborador.edad}</td>
                            <td>{colaborador.cargo}</td>
                            <td>{colaborador.telefono}</td>
                            <td className="text-center">
                                <button className="btn btn-dark" onClick={()=> {enviarId(colaborador.id)}}>Eliminar</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
};

export default Listado