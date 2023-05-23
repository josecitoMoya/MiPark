const Parkings = require("../models/Parkings");
const Reserves = require("../models/Reserves");
const {
  enviarEmailConfirmacion,
  enviarEmailCancelacion,
} = require("../services/email_sender.js");

class ReservesController {
  // Aca en el req.body tengo que recibir { un objeto = { ["15","16","17"] , clientId: 3 , parkingId: 4 }}  <= EJEMPLO

  static async allReserves(req, res) {
    try {
      const id = req.params.userId.slice(1);
      const reserves = await Reserves.findAll({
        where: {
          clientId: id,
        },
        include: {
          model: Parkings,
          association: "parking",
          foreignKey: "parkingId",
        },
      });
      return res
        .status(200)
        .send({ message: "Reserves founded", data: reserves });
    } catch (error) {
      return res.status(500).send({ message: "Error seraching reserve" });
    }
  }

  static async addReserve(req, res) {
    let email = req.body.email;
    let address = req.body.address;
    try {
      const hours = req.body.hours;
      for (let i = 0; i < hours.length; i++) {
        let reserve = {
          clientId: req.body.clientId,
          parkingId: req.body.parkingId,
          hour: hours[i],
          price: req.body.price,
          date: req.body.date,
        };
        const data = await Reserves.create(reserve);
      }
      await enviarEmailConfirmacion(email, address);
      return res.status(201).send({ message: "Added reserve" });
    } catch (error) {
      return res.status(500).send({ message: "Error adding reserve" });
    }
  }

  static async removeReserve(req, res) {
    try {
      const id = req.params.id.slice(1);
      const reserve = await Reserves.findByPk(id);
      if (reserve) {
        const data = await reserve.destroy();
        return res
          .status(200)
          .send({ message: "The reserve was removed", data: data });
      } else {
        return res.status(204).send({ message: "Reserve couldn't be found" });
      }
    } catch (error) {
      return res.status(500).send({ message: "Error in server" });
    }
  }

  static async updateState(req, res) {
    let email = req.body.email;
    let address = req.body.address;
    try {
      const id = req.params.id.slice(1);
      const state = req.query;
      const reserve = await Reserves.findOne({
        where: {
          id: id,
        },
        include: {
          model: Parkings,
          association: "parking",
          foreignKey: "parkingId",
        },
      });
      if (reserve) {
        const data = await reserve.update(state);
        await enviarEmailCancelacion(email, address);
      } else {
        return res.status(204).send({ message: "Reserve couldn't be found" });
      }
      return res
        .status(200)
        .send({ message: "Reserve state was updated", data: reserve });
    } catch (error) {
      return res.status(500).send({ message: "Error in server" });
    }
  }
}

module.exports = ReservesController;
