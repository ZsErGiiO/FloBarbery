import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  // Definir el estado para el índice del carrusel
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array de objetos para los datos del carrusel
  const slides = [
    {
      image: '/img/Foto1.webp', // Ruta relativa desde public
      heading: 'Bienvenidos a The Barber\'s Shop',
      text: 'El lugar donde tu estilo cobra vida.',
    },
    {
      image: '/img/Foto2.webp',
      heading: 'Transforma tu look',
      text: 'Un estilo único para cada cliente.',
    },
    {
      image: '/img/Foto3.webp',
      heading: 'Corte y estilo con profesionalismo',
      text: 'Confía en los expertos para tu próximo corte.',
    },
  ];

  // Cambiar al siguiente slide cada 8 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length); // Lo vuelve a 0 cuando llega al final
    }, 5000); // 5 segundos

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" style={{ backgroundImage: `url(${slides[currentIndex].image})` }}>
      <div className="hero-content">
        <h2>{slides[currentIndex].heading}</h2>
        <p>{slides[currentIndex].text}</p>
      </div>
    </section>
  );
};

export default HeroSection;