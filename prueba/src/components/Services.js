import React from 'react';

const Services = () => {
  return (
    <section className="services">
      <div className="service-item" style={{ backgroundImage: 'url(./img/FotoServicio3.jpg)' }}>
        <div className="service-content">
          <h2>CABELLO</h2>
          <p>Es la esencia de nuestro salón. Nuestros técnicos especializados valorarán la forma más adecuada para crear, mantener o renovar tu imagen.</p>
        </div>
      </div>
      <div className="service-item" style={{ backgroundImage: 'url(./img/FotoServicio1.jpg)' }}>
        <div className="service-content">
          <h2>BARBA</h2>
          <p>Sin duda, el mejor afeitado de Madrid. Nuestro afeitado es la mezcla perfecta de la tradición y las nuevas tecnologías.</p>
        </div>
      </div>
      <div className="service-item" style={{ backgroundImage: 'url(./img/FotoServicio2.jpg)' }}>
        <div className="service-content">
          <h2>PIEL</h2>
          <p>Cuidado total de la imagen del hombre: masajes, depilaciones, manicuras/pedicuras, tratamientos faciales y corporales.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;