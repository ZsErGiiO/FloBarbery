import React from 'react';
import '../index.css';
import 'font-awesome/css/font-awesome.min.css';

const Horario = () => {
    return (
      <div className="horario-container">
        {/* Primer contenedor con imagen de fondo */}
        <div
          className="horario-item"
          style={{ backgroundImage: 'url(./img/FotoHorario5.jpg)' }} // Asegúrate de que la ruta sea correcta
        >
          <div className="horario-texto">
            
            <h2>Horario</h2>
            <div className="horario-lista">
              <div className="horario-dia">
                <span>Lunes a Viernes</span>
                <span className="horario-hora">9:00 AM - 7:00 PM</span>
              </div>
              <div className="horario-dia">
                <span>Sábados</span>
                <span className="horario-hora">10:00 AM - 4:00 PM</span>
              </div>
              <div className="horario-dia">
                <span>Domingos</span>
                <span className="horario-hora">Cerrado</span>
              </div>
            </div>
          </div>
          {/* Ícono de Font Awesome */}
          <div className="icono-container">
            <span className="fa fa-clock" style={{ color: '#af916b', fontSize: '3rem' }}></span>
          </div>
        </div>
  
        {/* Segundo contenedor con imagen de fondo */}
        <div
          className="horario-item"
          style={{ backgroundImage: 'url(./img/Peluqueria.jpeg)' }} // Asegúrate de que la ruta sea correcta
        >
          
        </div>
      </div>
    );
  };
  
  export default Horario;