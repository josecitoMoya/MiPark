const models = require("../models/index.js");
const Parkings = require("../models/Parkings.js");

class ParkingController {
  //ADMIN-PARKINGS ROUTES CONTROLLER
  static async getPendingParkings(req, res) {
    const parks = await Parkings.findAll({ where: { authorized: false } });
    if (parks.length > 0) {
      return res.status(200).send({
        message: "Parkings with pending authorization requests are sent",
        data: parks,
      });
    }
    return res.status(204).send({
      message: "There are no parkings with pending authorization requests",
    });
  }

  static async authorizeParking(req, res) {
    const parking = await Parkings.findOne({
      where: { id: req.body.id },
    });
    await parking.update({ authorized: true });
    res.status(200).send({
      message: "Parking was successfully authorized",
      data: parking,
    });
  }

  static async deleteParking(req, res) {
    const parking = await Parkings.findOne({
      where: { id: req.body.id },
    });
    await parking.destroy();
    res.status(200).send({
      message: "Parking was successfully deleted",
    });
  }

  //USER-PARKINGS ROUTES CONTROLLER
  static async getAllParkings(req, res) {
    const parks = await Parkings.findAll({ where: { authorized: true } });
    if (parks.length > 0) {
      return res.status(200).send({
        message: "Authorized parkings are sent",
        data: parks,
      });
    }
    return res
      .status(204)
      .send({ message: "There are no authorized parkings." });
  }

  static async getOneParking(req, res) {
    const parking = await Parkings.findOne({
      where: { id: req.params.id },
    });
    if (!parking) return res.status(401).send({ message: "Invalid Parking" });
    res
      .status(200)
      .send({ message: "Requested parking is sent", data: parking });
  }

  static async getParkingsByZone(req, res) {
    const parkings = await Parkings.findAll({
      where: {
        zone: req.params.name,
        roof: req.params.roof,
        van_able: req.params.van_able,
      },
    });
    if (!parkings)
      return res.status(204).send({
        message: "There are no authorized parkings in the requested zone.",
      });
    res.status(200).send({
      message: "Search result is sent",
      data: parkings,
    });
  }

  static async getParkingsByCity(req, res) {
    const parkings = await Parkings.findAll({
      where: {
        city: req.params.name,
        roof: req.params.roof,
        van_able: req.params.van_able,
      },
    });
    if (!parkings)
      return res.status(204).send({
        message: "There are no authorized parkings in the requested city.",
      });
    res.status(200).send({
      message: "Se envía el resultado de la búsqueda",
      data: parkings,
    });
  }

  static async getParkingsByProvince(req, res) {
    const parkings = await Parkings.findAll({
      where: {
        province: req.params.name,
        roof: req.params.roof,
        van_able: req.params.van_able,
      },
    });
    if (!parkings)
      return res.status(204).send({
        message: "There are no authorized parkings in the requested province.",
      });
    res.status(200).send({
      message: "Se envía el resultado de la búsqueda",
      data: parkings,
    });
  }

  static async createParking(req, res) {
    const park = await Parkings.create(req.body);
    if (park) {
      return res.status(200).send({
        message: "Parking creation request was successfully registered",
        data: park,
      });
    }
    res
      .status(404)
      .send({ message: "Parking creation request couldn't be registered" });
  }
}

module.exports = ParkingController;
