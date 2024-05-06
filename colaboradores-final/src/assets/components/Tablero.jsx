const Tablero = ({ colaborador }) => {
    return (
      <>
        <tr>
          <td>{colaborador.nombre}</td>
          <td>{colaborador.correo}</td>
          <td>{colaborador.edad}</td>
          <td>{colaborador.cargo}</td>
          <td>{colaborador.telefono}</td>
       </tr>
      </>
    );
  };
  
  export default Tablero;