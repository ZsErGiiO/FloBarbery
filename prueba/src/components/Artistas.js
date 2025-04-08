import React from 'react';

const ConoceANuestrosArtistas = () => {
  const artistas = [
    {
      id: 1,
      nombre: 'Khabib in Abdul',
      rol: 'Barbero Senior',
      imagen: './img/Retrato1.jpg', // Aquí debes poner las URL correctas de las imágenes
    },
    {
      id: 2,
      nombre: 'Manuel Tijerón',
      rol: 'Barbero Junior',
      imagen: './img/Retrato2.jpg',
    },
    {
      id: 3,
      nombre: 'Dimitri Volkovski',
      rol: 'Barbero Senior',
      imagen: './img/Retrato3.jpg',
    },
  ];

  return (
    <section className="conoce-artistas">
      <div className="container">
        <h2 className="conoce-artistas-heading">Conoce a nuestros artistas</h2>
        <p className="conoce-artistas-description">
          Conoce a nuestro equipo de barberos profesionales que te ofrecen el mejor servicio para tu cuidado personal.
        </p>
        <div className="artistas">
          {artistas.map(artista => (
            <div key={artista.id} className="artista-card">
              <img
                src={artista.imagen}
                alt={artista.nombre}
                className="artista-img"
              />
              <div className="artista-info">
                <h3 className="artista-name">{artista.nombre}</h3>
                <p className="artista-role">{artista.rol}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Imágenes decorativas flotantes */}
      <div className="decorative-images">
        <img className="tijeras" src="./img/tijeras.png" alt="Tijeras" />
        <img className="peine" src="./img/peine.png" alt="Peine" />
      </div>
    </section>
  );
};

export default ConoceANuestrosArtistas;