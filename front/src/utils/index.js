function convertDateHour(fechaString, horaString) {
  const [dia, mes, anio] = fechaString.split("/");
  const fechaHoraString = `${anio}-${mes}-${dia}T${horaString}:00:00Z`;
  return new Date(fechaHoraString);
}

function isOneHourBefore(dateReserved, actualDate) {
  // Obtener la diferencia en milisegundos entre los tiempos
  const timeDifference = actualDate.getTime() - dateReserved.getTime();

  // Verificar si la diferencia es igual a una hora (3600000 milisegundos)
  return timeDifference < 3600000;
}

module.exports = {
  convertDateHour,
  isOneHourBefore,
};
