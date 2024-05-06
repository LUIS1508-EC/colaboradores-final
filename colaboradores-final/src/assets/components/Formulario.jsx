import { useState } from 'react';


const Formulario = ({ colaboradores, setColaboradores, setAlerta }) => {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [edad, setEdad] = useState('');
    const [cargo, setCargo] = useState('');
    const [telefono, setTelefono] = useState('');

    const guardado = (e) => {
        e.preventDefault();

        if (nombre === '' || correo === '' || edad === '' || cargo === '' || telefono === '') {
            setAlerta({
                error: true,
                mensaje: 'Debes completar todos los campos',
                color: 'danger',

            })

        } else {
            setAlerta({
                error: true,
                mensaje: "Colabrorador agregado correctamente",
                color: "success",

            })
            setNombre("");
            setCorreo("");
            setEdad("");
            setCargo("");
            setTelefono("");
            const colaborador = { nombre, correo, edad, cargo, telefono };
            setColaboradores([...colaboradores, colaborador]);

        }
    };

    return (

        <form className="mb-2 pb-2 justify-content-center color-danger" onSubmit={guardado}>
            <div className="mb-3">
                <input type="text" placeholder="Nombre del colaborador" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
            </div>
            <div className="mb-3">
                <input type="email" placeholder="Correo Electrónico" value={correo} onChange={(e) => setCorreo(e.target.value)}/>
            </div>
            <div className="mb-3">
                <input type="number" placeholder="Edad del colaborador" value={edad} onChange={(e) => setEdad(e.target.value)}/>
            </div>
            <div className="mb-3">
                <input type="text" placeholder="Cargo del colaborador" value={cargo} onChange={(e) => setCargo(e.target.value)}/>
            </div>
            <div className="mb-3">
                <input type="text" placeholder="Teléfono del colaborador" value={telefono} onChange={(e) => setTelefono(e.target.value)}/>
            </div>         
            <button type="submit" className="btn btn-secondary">
                Agregar colaborador
            </button>
        </form>

    )
}

export default Formulario