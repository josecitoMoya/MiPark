const Parkings = require("../models/Parkings");
const Reserves = require("../models/Reserves");

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
    try {
      const data = await Reserves.create(req.body);
      return res.status(201).send({ message: "Added reserve", data });
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
        return res.status(204).send({ message: "Reserves couldn't found" });
      }
    } catch (error) {
      return res.status(500).send({ message: "Error in server" });
    }
  }

  static async updateState(req, res) {
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
      } else {
        return res.status(204).send({ message: "User couldn't found" });
      }
      return res
        .status(200)
        .send({ message: "User state was updated", data: reserve });
    } catch (error) {
      return res.status(500).send({ message: "Error in server" });
    }
  }
}

module.exports = ReservesController;
