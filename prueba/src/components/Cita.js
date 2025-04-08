import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Calendar from 'react-calendar';

const ReservaCita = () => {
  const [fecha, setFecha] = useState(new Date());
  const [hora, setHora] = useState('');
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [diaSeleccionado, setDiaSeleccionado] = useState(null);
  const [mensajeExito, setMensajeExito] = useState('');  // Estado para el mensaje de éxito

  const horariosDisponibles = [
    '11:00', '12:00', '12:30', '13:00', '14:00', '15:00', '16:00', '17:00'
  ];

  const [reservas, setReservas] = useState([]);

  const limpiarFecha = (fecha) => {
    if (!fecha) return null;
    return new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate()).getTime();
  };

  const estaReservado = (fecha, hora) => {
    const fechaLimpiada = limpiarFecha(fecha);
    if (fechaLimpiada === null) return false;
    return reservas.some((reserva) => {
      const fechaReservaLimpiada = limpiarFecha(new Date(reserva.fecha));
      return fechaReservaLimpiada === fechaLimpiada && reserva.hora === hora;
    });
  };

  const getHorariosDisponibles = () => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinutes = now.getMinutes();
    
    return horariosDisponibles.filter(h => {
      const [hour, minute] = h.split(':').map(num => parseInt(num, 10));

      if (limpiarFecha(fecha) === limpiarFecha(now)) {
        if (hour < currentHour || (hour === currentHour && minute <= currentMinutes)) {
          return false;
        }
      }
      return true;
    });
  };

  const manejarReserva = (e) => {
    e.preventDefault();

    if (!fecha || !hora || !nombre || !email) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    const fechaReserva = fecha.toLocaleDateString('es-ES'); 
    
    const templateParams = {
      nombre,
      email,
      fecha: fechaReserva,
      hora
    };

    emailjs.send('service_qju45qa', 'template_thyxjqb', templateParams, 'KczfGMpqBhcQb1eVq')
      .then((result) => {
        setMensajeExito('¡Reserva confirmada! Hemos enviado un correo con los detalles.');
        setReservas([...reservas, { fecha, hora }]);
        setFecha(new Date());
        setHora('');
        setNombre('');
        setEmail('');
        setDiaSeleccionado(null);

        // Desaparecer el mensaje después de 5 segundos
        setTimeout(() => {
          setMensajeExito('');
        }, 5000);
      }, (error) => {
        alert('Error al enviar el correo');
      });
  };

  const manejarDiaSeleccionado = (dia) => {
    setDiaSeleccionado(dia);
    setFecha(dia);
  };

  return (
    <div className="seccion-reserva-cita">
      <div className="reserva-cita">
        <h2>Reserva tu cita</h2>
        <form onSubmit={manejarReserva}>
          {/* Calendario para seleccionar la fecha */}
          <div className="calendar-container">
            <Calendar
              onChange={manejarDiaSeleccionado}
              value={fecha}
              minDate={new Date()} 
              locale="es-ES"
              tileClassName={({ date, view }) => {
                const fechaLimpiada = limpiarFecha(date);
                if (fechaLimpiada === limpiarFecha(diaSeleccionado)) {
                  return 'selected'; 
                }
                if (Array.isArray(reservas)) {
                  if (reservas.some(reserva => limpiarFecha(new Date(reserva.fecha)) === fechaLimpiada)) {
                    return 'no-disponible';
                  }
                }
                return '';
              }}
            />
          </div>

          {/* Selector de hora */}
          <div className="hora-selector">
            <select value={hora} onChange={(e) => setHora(e.target.value)} required>
              <option value="">Selecciona una hora</option>
              {getHorariosDisponibles().map((h) => {
                const reservado = estaReservado(fecha, h);
                return (
                  <option 
                    key={h} 
                    value={h} 
                    disabled={reservado}
                  >
                    {h} 
                    {reservado && <span className="no-disponible-text"> - No disponible</span>}
                  </option>
                );
              })}
            </select>
          </div>

          {/* Campos de nombre y email */}
          <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
          <input type="email" placeholder="Correo Electrónico" value={email} onChange={(e) => setEmail(e.target.value)} required />

          {/* Botón para enviar la reserva */}
          <button type="submit">Reservar</button>
        </form>

        {/* Mensaje de confirmación */}
        {mensajeExito && (
          <div className="mensaje-exito">
            <p>{mensajeExito}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReservaCita;
