import React from 'react';
import futbolistas from './futbolistas.js';

const Nuevo = () => {
  return (
    <div>
      <h1>Futbolistas</h1>
      <ul>
        {futbolistas.map((futbolista, index) => (
          <li key={index}>
            <strong>Nombre:</strong> {futbolista.nombre}, <strong>Equipo:</strong> {futbolista.equipo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Nuevo;

