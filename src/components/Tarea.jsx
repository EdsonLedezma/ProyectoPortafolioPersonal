import React, { useState } from 'react';

function Tarea(props) {
  const [isDone, setIsDone] = useState(props.isDone);

  function cambiarTarea() {
    setIsDone(!isDone);
    console.log("Tarea terminada");
  }

  let datos;
  let checkbox;

  if (!isDone) {
    datos = <p>{props.children}</p>;
    checkbox = (
      <input type="checkbox" onClick={cambiarTarea} defaultChecked={isDone} />
    );
  }

  return (
    <div>
      {datos}
      {checkbox}
    </div>
  );
}

export default Tarea;
