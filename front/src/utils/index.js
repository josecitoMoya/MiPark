function convertDateHour(cadenaFecha, hora) {
  console.log(cadenaFecha);
  const fechaComponents = cadenaFecha
    .split("/")
    .map((componente) => parseInt(componente.trim()));
  const dia = fechaComponents[0];
  const mes = fechaComponents[1] - 1;
  const anio = fechaComponents[2];

  return new Date(anio, mes, dia, hora);
}

function isOneHourBefore(dateReserved, actualDate) {
  const actualHour = actualDate.getTime();
  const hourReserves = dateReserved.getTime();
  if (hourReserves > actualHour) {
    // Obtener la diferencia en milisegundos entre los tiempos
    const timeDifference = Math.abs(actualHour - hourReserves);
    console.log(timeDifference);
    // Verificar si la diferencia es igual a una hora (3600000 milisegundos)
    return timeDifference > 3600000;
  } else {
    return false;
  }
}

module.exports = {
  convertDateHour,
  isOneHourBefore,
};
