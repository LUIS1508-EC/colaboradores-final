import Tablero from './Tablero.jsx';


const Listado = ({ colaboradores, buscaColaborador }) => {
    return (
        <section>
            <table className="table table-striped table-hover table-dark ">
                <thead>
                    <tr>

                        <th scope='col'>Nombre</th>
                        <th scope='col'>Correo</th>
                        <th scope='col'>Edad</th>
                        <th scope='col'>Cargo</th>
                        <th scope='col'>Teléfono</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        colaboradores
                            .filter((colaborador) => Object.values(colaborador).some((valor) => valor.toLowerCase().includes(buscaColaborador?.toLowerCase()))
                            ).map((colaborador) => (
                                <Tablero key={colaborador.id} colaborador={colaborador} />
                            ))
                    }
                </tbody>
            </table>
        </section>
    )
};

export default Listado