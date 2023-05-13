const User = require("../models/Users");

class UserController {
  static async registerUser(req, res) {
    const [user, created] = await User.findOrCreate(
      { where: { email: req.body } },
      req.body
    );

    if (created) {
      return res
        .status(200)
        .send({ message: "the user was successfully registered", data: user });
    }
    res.status(500).send({ message: "The user are register" });
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
      };
      const token = Token.validatePassword(payload);
      res
        .status(200)
        .cookie("token", token)
        .send({ message: "The user are logedd", data: user });
    } else {
      return res.status(401).send({ message: "Invalid Passeord" });
    }
  }

  static async logOutUser(req, res) {
    res.status(200).token("token", "");
  }

  static async getUser(req, res) {
    const token = req.cookie.token;
    const payload = await Token.validateToken(token);

    if (decoded) {
      return res
        .status(200)
        .send({ message: "Token verificated", data: payload });
    }
    res.status(500).send({ message: "Token invalid" });
  }

  static async modUser(req, res) {
    try {
      // ACORDAR CON EL FRONT COMO RECIBIS LA MODIFICACION  PRA MODICAR LA INSTACIA
      const [numRows, updatedRows] = await User.update(req.body, {
        where: { email: req.body.email },
      });

      if (numRows > 0) {
        return res
          .status(200)
          .send({ message: `Se actualizaron ${numRows} filas.` });
      } else {
        res
          .status(200)
          .send({ message: "No se encontraron filas para actualizar." });
      }
    } catch (error) {
      res.status(500).json({ message: "No se pudo actualizar el usuario." });
    }
  }
}

module.exports = UserController;
