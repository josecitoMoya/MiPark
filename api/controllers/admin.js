const models = require("../models/index.js");
const Parkings = require("../models/Parkings.js");
const Users = require("../models/Users.js");

class AdminController {
  static async getPendingParkings(req, res) {
    const parks = await Parkings.findAll({
      where: { authorized: false },
      include: {
        id: Users.id,
        association: "owner",
        foreignKey: "ownerId",
      },
    });
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

  static async dropParking(req, res) {
    const parking = await Parkings.findOne({
      where: { id: req.body.id },
    });
    await parking.update({ dropped: true });
    res.status(200).send({
      message: "Parking was successfully deleted",
    });
  }
  static async getAllUsers(req, res) {
    const users = await Users.findAll({});
    if (users.length > 0) {
      return res.status(200).send({
        message: "Users list is sent",
        data: users,
      });
    }
    return res.status(204).send({ message: "There are no registered users." });
  }

  static async deleteUser(req, res) {
    const user = await Users.findOne({
      where: { id: req.body.id },
    });
    await user.destroy();
    res.status(200).send({
      message: "User was successfully deleted",
    });
  }

  //PARA LOGRAR QUE UN USUARIO NO PUEDA AUTORREVOCARSE EL PERMISO DE ADMIN, SUGIERO QUE LO MANEJEMOS
  //DESDE EL FRONT, EVITANDO MOSTRAR EN LA LISTA DE USUARIOS ADMIN AL PROPIO USUARIO ADMIN LOGUEADO
  static async toggleAdmin(req, res) {
    const user = await Users.findOne({
      where: { id: req.body.id },
    });
    user.admin === false
      ? await user.update({ admin: true })
      : await user.update({ admin: false });
    res.status(200).send({
      message: `Admin permission for user ID ${user.id} was successfully changed`,
      data: user,
    });
  }
}

module.exports = AdminController;
