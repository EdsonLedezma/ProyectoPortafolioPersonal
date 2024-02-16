import React from 'react';
import Tarea from './Tarea'; 
import tareas from './tareas.json'; 

function Lista() {
  return (
    <div>
      <h1>Lista de Tareas</h1>
      {tareas.map((tarea, index) => (
        <Tarea key={index} isDone={tarea.Terminada}>{tarea.tarea}</Tarea>
      ))}
      <div>
        <input type="text" />
        <button>Agregar tarea</button>
      </div>
    </div>
  );
}

export default Lista;