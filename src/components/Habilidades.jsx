import React from 'react';

const Habilidades = () => {
  const habilidades = [
    'Java',
    'SQL',
    'C#',
    'JavaScript',
    'HTML y CSS',
    'Aprendiendo React y estructuración de datos'
  ];

  return (
    <div>
      <h2>Edson Martin Ledezma Montoya</h2>
      <p>Estudiante en ingeniería de software</p>
      <p>*Habilidades</p>
      <ul  className="habilidades-lista">
        {habilidades.map((habilidad, index) => (
          <li key={index}>{habilidad}</li>
        ))}
      </ul>
      <p>Me gusta trabajar en proyectos creativos como aplicaciones web de negocios, videojuegos y análisis de datos</p>
    </div>
  );
}

export default Habilidades;
