const User = require("../models/Users");
const Token = require("../utils/Token");
const { enviarEmailRegistroUser } = require("../services/email_sender.js");

class UserController {
  static async registerUser(req, res) {
    const [user, created] = await User.findOrCreate({
      where: { email: req.body.email },
      defaults: req.body,
    });

    if (created) {
      const email = await enviarEmailRegistroUser(req.body.email, req.body.firstName, req.body.lastName)
      return res
        .status(200)
        .send({ message: "the user was successfully registered", data: user });
    }
    res.status(500).send({ message: "An error occured while trying to register user" });
  }

  static async loginUser(req, res) {
    //Busco el usuario para comprobar el registro
    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user) return res.status(401).send({ message: "Invalid Email" });

    const areValidate = await user.validatePassword(req.body.password);

    if (areValidate) {
      const payload = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        id: req.body.id,
      };
      const token = Token.generateToken(payload);
      res
        .status(200)
        .cookie("token", token)
        .send({ message: "The user is logged", data: user });
    } else {
      return res.status(401).send({ message: "Invalid Password" });
    }
  }

  static async logOutUser(req, res) {
    res.clearCookie("token");
    res.sendStatus(204);
  }

  static async getUser(req, res) {
    const token = req.cookies.token;

    if (token) {
      const payload = await Token.validateToken(token);
      if (!payload) {
        return res.status(404).send({ message: "Token expired" });
      }
      if (payload) {
        const user = await User.findOne({ where: { email: payload.email } });
        const data = {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          admin: user.admin,
          id: user.id,
        };
        return res
          .status(200)
          .send({ message: "Token verified", data: data });
      }
    }
    res.status(500).send({ message: "Invalid token" });
  }

  static async modUser(req, res) {
    try {
      // ACORDAR CON EL FRONT COMO RECIBIS LA MODIFICACION  PRA MODICAR LA INSTACIA
      const user = await User.findOne({ where: { email: req.body.email } });
      await user.update(req.body);
      const payload = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
      };
      return res.status(200).send({
        message: `User ${user.firstName} ${user.lastName} has been updated`,
        data: payload, // MANDO INFO DE USUARIO PARA QUE EL FRONT YA RECIBA LA DATA DEL USER MODIFICADA
      });
    } catch (error) {
      res.status(500).json({ message: "User couldn't be updated" });
    }
  }

  static async findUser(req, res) {
    try {
      const userId = req.params.userId;
      console.log(userId);
      const user = await User.findByPk(userId);
      res.status(200).send({ message: "The user was found", data: user });
    } catch (error) {
      res.status(500).send({ message: "Error from serves searching user" });
    }
  }
}

module.exports = UserController;
