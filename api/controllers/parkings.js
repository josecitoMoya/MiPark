const models = require("../models/index.js");
const Parkings = require("../models/Parkings.js");

class ParkingController {
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

  //RUTA PARA GET DEL FRONT:
  //http://localhost:8080/api/parkings/search/?province=X&city=X&zone=X&roof=X&van_able=X
  static async getParkingsByCategories(req, res) {
    let request = {};
    if (req.query.province) {
      request.province = req.query.province;
    }
    if (req.query.city) {
      request.city = req.query.city;
    }
    if (req.query.zone) {
      request.zone = req.query.zone;
    }
    if (req.query.roof) {
      request.roof = req.query.roof;
    }
    if (req.query.van_able) {
      request.van_able = req.query.van_able;
    }
    const parkings = await Parkings.findAll({
      where: request,
    });
    if (parkings.length === 0)
      return res.status(200).send({
        message: "There are no authorized parkings by the selected parameters.",
      });
    res.status(200).send({
      message: "Parkings are sent.",
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
