import React, { useState } from "react";
import "./inputs.css"

const Inputs = ({ lineaUno, lineaDos, agregarColaborador }) => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleCorreoChange = (event) => {
    setCorreo(event.target.value);
  };

  const handleAgregarClick = () => {
    const nuevoColaborador = {
      nombre: nombre,
      correo: correo,
    };

    agregarColaborador(nuevoColaborador);
    setNombre("");
    setCorreo("");
  };

  return (
    <div className="contenedor-inputs" >
      <h2>{lineaUno}</h2>
      <input type="text" placeholder="nombre" value={nombre} onChange={handleNombreChange} />
      <br />
      <h2>{lineaDos}</h2>
      <input type="text" placeholder="correo" value={correo} onChange={handleCorreoChange} />
      <br />
      <button onClick={handleAgregarClick}>Agregar Nuevo Colaborador</button>
    </div>
  );
};

export default Inputs;

