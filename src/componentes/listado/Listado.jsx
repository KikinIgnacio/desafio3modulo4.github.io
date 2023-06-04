import React from "react";
import "./listado.css"
const Listado = ({ tituloListado, colaboradores }) => {
  return (
    <section className="contenedor-listado"> 
      <h2>{tituloListado}</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
          </tr>
        </thead>
        <tbody>
          {colaboradores.map((colab) => (
            <tr key={colab.id}>
              <td>{colab.id}</td>
              <td>{colab.nombre}</td>
              <td>{colab.correo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Listado;


