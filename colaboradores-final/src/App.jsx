import { useState } from 'react'
import { BaseColaboradores } from './assets/components/Colaboradores'
import Listado from './assets/components/Listado'
import Formulario from './assets/components/Formulario'
import Buscador from './assets/components/Buscador'
import "./App.css";
import Alert from './assets/components/Alertas'


function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [buscar, setBuscar] = useState('');
  const [alerta, setAlerta] = useState({ error: false, mensaje: "", color: "" });

  return (

    <>
      <div className="container-fluid">
        <div className="row titulo1">
          <h1>Lista de Colaboradores</h1>
        </div>
        <div className="row buscador">
          <Buscador buscaColaborador={setBuscar} />
        </div>
        <div className='lista'>
          <Listado
            colaboradores={colaboradores}
            buscaColaborador={buscar}
          />
        </div>
        <div className='titulo2'>
          <h4 className="mb-2 pb-2">Agregar colaborador</h4>
        </div>
        <div className='formu'>
          <Formulario
            colaboradores={colaboradores}
            setColaboradores={setColaboradores}
            setAlerta = {setAlerta}
            alerta = {alerta}
          />
        </div>
        <div className='alerta'>
          {alerta.error ? (
            <Alert mensaje={alerta.mensaje} color={alerta.color} />
          ) : null}
        </div>
      </div>
    </>
  )
}

export default App
