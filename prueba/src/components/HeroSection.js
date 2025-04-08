import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Importa motion de framer-motion

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: './img/Foto1.webp',
      heading: 'Bienvenidos a FloBarber`s',
      text: 'El lugar donde tu estilo cobra vida.',
    },
    {
      image: './img/Foto2.jpg',
      heading: 'Transforma tu look',
      text: 'Un estilo único para cada cliente.',
    },
    {
      image: './img/Foto3.jpg',
      heading: 'Corte y estilo con profesionalismo',
      text: 'Confía en los expertos para tu próximo corte.',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Cambiar imagen cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" style={{ backgroundImage: `url(${slides[currentIndex].image})` }}>
      <div className="hero-content">
        {/* Animación de flotación para el encabezado */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }} // Comienza un poco abajo y invisible
          animate={{ opacity: 1, y: 0 }} // Se mueve a su posición original
          transition={{ delay: 0.5, duration: 1 }} // Se retrasa un poco
          whileHover={{
            y: [-5, 5, -5, 5, -5], // Movimiento de arriba a abajo (sube y baja)
            transition: { 
              duration: 1.5, // Duración del ciclo de flotación
              ease: "easeInOut", // Suaviza el movimiento
              repeat: Infinity, // Se repite infinitamente
            }
          }}
          className="hero-heading"
        >
          {slides[currentIndex].heading}
        </motion.h2>
        
        {/* Animación de flotación para el texto */}
        <motion.p
          initial={{ opacity: 0, y: 20 }} // Comienza un poco abajo y invisible
          animate={{ opacity: 1, y: 0 }} // Se mueve a su posición original
          transition={{ delay: 1, duration: 1 }} // Se retrasa un poco más
          whileHover={{
            y: [-5, 5, -5, 5, -5], // Movimiento de arriba a abajo (sube y baja)
            transition: { 
              duration: 1.5, // Duración del ciclo de flotación
              ease: "easeInOut", // Suaviza el movimiento
              repeat: Infinity, // Se repite infinitamente
            }
          }}
          className="hero-text"
        >
          {slides[currentIndex].text}
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;