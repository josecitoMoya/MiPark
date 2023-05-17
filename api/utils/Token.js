const { SECRET } = require("../config");
const jwt = require("jsonwebtoken");

module.exports = class Token {
  static generateToken(payload) {
    return jwt.sign(payload, SECRET, { expiresIn: "2h" });
  }

  static validateToken(token) {
    return jwt.verify(token, SECRET);
  }
};
