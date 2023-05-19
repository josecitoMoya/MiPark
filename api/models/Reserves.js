const Sequelize = require("sequelize");
const db = require("../db");

class Reserves extends Sequelize.Model {}

Reserves.init(
  {
    date: { type: Sequelize.STRING, allowNull: false },
    hour: { type: Sequelize.INTEGER, allowNull: false },
    price: { type: Sequelize.DOUBLE, allowNull: false },
  },
  { sequelize: db, modelName: "reserve" }
);

module.exports = Reserves;
