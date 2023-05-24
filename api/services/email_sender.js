const nodemailer = require("nodemailer");

const enviarEmailRegistroUser = async (email, firstName, lastName) => {
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
    to: email,
    subject: "Registro de usuario en MiPark",
    text: `Bienvenido ${firstName} ${lastName}! Ya podés usar todos los servicios de MiPark.`,
  };

  const transport = nodemailer.createTransport(config);
  const info = await transport.sendMail(mensaje);
};

const enviarEmailConfirmacion = async (email, address, date, hours) => {
  let stringHoras = hours.join(", ");

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
    text: `Gracias por reservar la cochera ubicada en ${address} con nuestra aplicación! La reservaste para el día ${date} a las ${stringHoras} hs.`,
  };

  const transport = nodemailer.createTransport(config);
  const info = await transport.sendMail(mensaje);
};

const enviarEmailCancelacion = async (email, address, date, hour) => {
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
    text: `La reserva de cochera ubicada en ${address} para el día ${date} a las ${hour} hs., realizada a través de la app MiPark, fue debidamente cancelada según lo solicitado.`,
  };

  const transport = nodemailer.createTransport(config);
  const info = await transport.sendMail(mensaje);
};

module.exports = {
  enviarEmailConfirmacion,
  enviarEmailCancelacion,
  enviarEmailRegistroUser,
};
