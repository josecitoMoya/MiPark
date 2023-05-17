const Sequelize = require("sequelize");
const db = require("../db/index.js");

class Carts extends Sequelize.Model {}

Carts.init(
  {},
  { sequelize: db, modelName: "carts" }
);

module.exports = Carts;