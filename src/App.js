 
import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Habilidades from './components/Habilidades';
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="profile">
          <img src="/profile-image.jpg" alt="Profile" />
        </div>
       
        <Projects />
        <Habilidades/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
