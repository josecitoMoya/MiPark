const models = require("../models/index.js");
const Parkings = require("../models/Parkings.js");
const Hours = require("../models/Hours.js")

class ParkingController {
  //RUTA PROVISORIA PARA PODER CREAR TABLAS DE PARKINGS EN EL SPRINT 1 CON POSTMAN
  //Y USARLAS EN EL FRONT
  static async crearParkingPrueba(req, res) {
    const park = await Parkings.create(req.body);
    if (park) {
      return res
        .status(200)
        .send({
          message: "Parking spot was successfully registered",
          data: park,
        });
    }
    res.status(404).send({ message: "Parking no pudo ser registrado" });
  }

  //RUTA PROVISORIA PARA PODER CREAR TABLAS DE HORARIOS EN EL SPRINT 1 CON POSTMAN
  //Y USARLAS EN EL FRONT
  static async crearHorariosPrueba(req, res) {
    const horarios = await Hours.create(req.body);
    if (horarios) {
      return res
        .status(200)
        .send({
          message: `Tabla de horarios para el parking con ID Nro ${horarios.parkingId} creada`,
          data: horarios,
        });
    }
    res.status(404).send({ message: "Tabla de horarios no pudo ser creada" });
  }

  static async getAllParkings(req, res) {
    const parks = await Parkings.findAll();
    if (parks.length > 0) {
      return res
        .status(200)
        .send({ message: "Se envían los parkings registrados", data: parks });
    }
    return res.status(204).send({ message: "No hay parkings registrados." });
  }

  static async getOneParking(req, res) {
    const parking = await Parkings.findOne({
      where: { id: req.params.id },
    });
    if (!parking) return res.status(401).send({ message: "Invalid Parking" });
    res
      .status(200)
      .send({ message: "Se envía el parking solicitado", data: parking });
  }

  static async getParkingsPorBarrio(req, res) {
    const parkings = await Parkings.findAll({
      where: { barrio: req.params.nombre },
    });
    if (!parkings)
      return res.status(204).send({
        message: "No hay parkings registrados en el barrio indicado.",
      });
    res.status(200).send({
      message: "Se envía el resultado de la búsqueda",
      data: parkings,
    });
  }

  static async getParkingsPorCiudad(req, res) {
    const parkings = await Parkings.findAll({
      where: { ciudad: req.params.nombre },
    });
    if (!parkings)
      return res.status(204).send({
        message: "No hay parkings registrados en la ciudad indicada.",
      });
    res.status(200).send({
      message: "Se envía el resultado de la búsqueda",
      data: parkings,
    });
  }

  static async getParkingsPorProvincia(req, res) {
    const parkings = await Parkings.findAll({
      where: { provincia: req.params.nombre },
    });
    if (!parkings)
      return res.status(204).send({
        message: "No hay parkings registrados en la provincia indicada.",
      });
    res.status(200).send({
      message: "Se envía el resultado de la búsqueda",
      data: parkings,
    });
  }

  static async getHorariosPorId(req, res) {
    const parking = await Parkings.findOne({
      where: { id: req.params.id },
    });
    let horarios = await Hours.findOne({ where: { parkingId: parking.id } });
    horarios = horarios.dataValues;
    let horariosDisponibles = [];
    for (let horario in horarios) {
      if (horarios[horario] === true) {
        horariosDisponibles.push(horario);
      }
    }
    res.status(200).send({
      message: "Se envía el resultado de la búsqueda",
      data: { parking: parking, horariosDisponibles: horariosDisponibles },
    });
  }
}

module.exports = ParkingController;
