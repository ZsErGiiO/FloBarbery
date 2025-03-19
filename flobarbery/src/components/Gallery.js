import React from 'react';

const Gallery = () => {
  return (
    <section className="gallery">
      <h2>Galería</h2>
      <div className="gallery-images">
        <img src="imagen1.jpg" alt="Corte de cabello 1" />
        <img src="imagen2.jpg" alt="Corte de cabello 2" />
        <img src="imagen3.jpg" alt="Corte de cabello 3" />
      </div>
    </section>
  );
};

export default Gallery;