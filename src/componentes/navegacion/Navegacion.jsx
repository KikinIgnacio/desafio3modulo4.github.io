import React, { useState } from 'react';
import './navegacion.css';

const Navegacion = ({ titulo, filtrarColaboradores }) => {
  const [busqueda, setBusqueda] = useState('');

  const handleChange = (event) => {
    setBusqueda(event.target.value);
    filtrarColaboradores(event.target.value); 
  };

  return (
    <div className="contenedor-navegacion">
      <h2 className="titulo">{titulo}</h2>
      <input
        type="text"
        placeholder="Nombre de colaboradores"
        value={busqueda}
        onChange={handleChange}
      />
    </div>
  );
};

export default Navegacion;

