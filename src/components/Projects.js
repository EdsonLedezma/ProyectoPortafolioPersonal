import React from 'react';


function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
      {
        <div className="project">
          <h3>Guero's Car Wash</h3>
          <p>Este proyecto es una idea de negocio
            de servicios de detallado automotriz a domicilio la pagina fue creada con PHP y boostrap.
          </p>
          <a href="#"></a>
        </div>}
        {<div className="project">
          <h3>Videojuego Atrapa a nuffy</h3>
          <p>Un juego del tipo text-adventure que trata sobre resolver acertijos para encontrar a Nuffy 
            responsable de hackear el sistema del banco de mexico
          </p>
          <a href="#">Link to project</a>
        </div>}
        {<div className="project">
          <h3>El juego del ahorcado</h3>
          <p>El clasico juego del ahorcado que intente desarrollar para mejorar mi logica y practicar el manejo de arreglos en javascript
          </p>
          <a href=".\ahorcado.html">Entrar al juego</a>
      {/* Intente poner las rutas pero no funcionaron, tampoco el test */}

        </div>}
      </div>
    </section>
  );
}

export default Projects;
