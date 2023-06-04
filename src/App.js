import React, { useState, useEffect } from 'react';
import './App.css';
import Navegacion from './componentes/navegacion/Navegacion.jsx';
import Inputs from './componentes/inputs/Inputs.jsx';
import Listado from './componentes/listado/Listado.jsx';
import { colab } from './componentes/listado/colab.js';

function App() {
  const [colaboradores, setColaboradores] = useState(colab);
  const [colaboradoresFiltrados, setColaboradoresFiltrados] = useState(colab);

  useEffect(() => {
    setColaboradoresFiltrados(colaboradores);
  }, [colaboradores]);

  const agregarColaborador = (nuevoColaborador) => {
    const nuevoID = (colaboradores.length + 1).toString();
    const colaboradorConID = { ...nuevoColaborador, id: nuevoID };
    setColaboradores((prevColaboradores) => [...prevColaboradores, colaboradorConID]);
  };

  const filtrarColaboradores = (busqueda) => {
    const colaboradoresFiltrados = colaboradores.filter((colaborador) =>
      colaborador.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
    setColaboradoresFiltrados(colaboradoresFiltrados);
  };

  return (
    <div className="App">
      <Navegacion titulo="Lista de colaboradores" filtrarColaboradores={filtrarColaboradores} />
      <Inputs
        lineaUno="Nombre del colaborador"
        lineaDos="Correo del colaborador"
        agregarColaborador={agregarColaborador}
      />
      <hr />
      <Listado tituloListado="Listado de colaboradores" colaboradores={colaboradoresFiltrados} />
    </div>
  );
}

export default App;
