import React from 'react';
import Header from './components/Header.js';
import Services from './components/Services.js';
import Artistas from './components/Artistas.js';
import HeroSection from './components/HeroSection.js';
import Horario from './components/Horario.js';
import Tarifas from './components/Tarifas.js';
import Cita from './components/Cita.js';
import './index.css';

function App() {
  return (
    <div className="App">

      <Header />
      <HeroSection />
      <Services />
      <Artistas />
      <Horario />
      <Tarifas />
      <Cita />
    </div>
  );
}

export default App;