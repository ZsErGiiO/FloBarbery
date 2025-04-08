require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');

const app = express();

// Configuración de CORS
const corsOptions = {
  origin: ['http://localhost:3000', 'https://ixmogames.com'],  // Permite ambos dominios
  methods: 'GET,POST',
  allowedHeaders: 'Content-Type',
};

app.use(cors(corsOptions));  // Habilita CORS con las opciones configuradas

// Acepta solicitudes OPTIONS de cualquier origen para manejar preflight requests
app.options('*', cors(corsOptions)); 

// Middleware para parsear JSON en el cuerpo de las solicitudes
app.use(express.json());

// Ruta para enviar el correo
app.post('/enviar-correo', async (req, res) => {
  const { nombre, email, fecha, hora } = req.body;

  if (!nombre || !email || !fecha || !hora) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios' });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Confirmación de Reserva',
    text: `Hola ${nombre}, tu cita ha sido confirmada para el día ${fecha} a las ${hora}. ¡Te esperamos en la barbería!`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Correo enviado correctamente' });
  } catch (error) {
    console.error('Error enviando correo:', error);
    res.status(500).json({ message: 'Error al enviar el correo' });
  }
});

// Configuración de Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Si tu backend y frontend están en el mismo servidor o se sirven desde el mismo directorio,
// deberías asegurarte de que primero se definan las rutas de la API y después servir los archivos estáticos de React.

if (process.env.NODE_ENV === 'production') {
  // Sirve los archivos estáticos de React cuando estés en producción
  app.use(express.static(path.join(__dirname, 'build')));

  // Si una ruta no coincide con las anteriores, redirige a index.html de React
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

// Arrancar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});