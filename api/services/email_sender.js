const nodemailer = require("nodemailer");

const enviarEmailConfirmacion = async (email, address) => {
  const config = {
    host: "smtp-mail.outlook.com",
    port: 587, //465
    // secure: true,
    auth: {
      user: "mipark_app@outlook.com",
      pass: "ytrewq147",
    },
  };

  const mensaje = {
    from: "mipark_app@outlook.com",
    to: email, //RECIBE EL EMAIL DEL USUARIO COMO PARÁMETRO
    subject: "Reserva de cochera en MiPark",
    //RECIBE COMO SEGUNDO PARÁMETRO LA UBICACIÓN DE LA COCHERA
    text: `Gracias por reservar la cochera ubicada en ${address} con nuestra aplicación!`,
  };

  const transport = nodemailer.createTransport(config);
  const info = await transport.sendMail(mensaje);
};

const enviarEmailCancelacion = async (email, address) => {
  const config = {
    host: "smtp-mail.outlook.com",
    port: 587, //465
    // secure: true,
    auth: {
      user: "mipark_app@outlook.com",
      pass: "ytrewq147",
    },
  };

  const mensaje = {
    from: "mipark_app@outlook.com",
    to: email, //RECIBE EL EMAIL DEL USUARIO COMO PARÁMETRO
    subject: "Cancelación de reserva de cochera en MiPark",
    //RECIBE COMO SEGUNDO PARÁMETRO LA UBICACIÓN DE LA COCHERA
    text: `La reserva de cochera ubicada en ${address} en MiPark fue debidamente cancelada según lo solicitado.`,
  };

  const transport = nodemailer.createTransport(config);
  const info = await transport.sendMail(mensaje);
};

module.exports = { enviarEmailConfirmacion, enviarEmailCancelacion };
