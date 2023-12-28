const Sequelize = require("sequelize");
const db = require("../db");

class Reserves extends Sequelize.Model {}

Reserves.init(
  {
    date: { type: Sequelize.STRING, allowNull: false },
    hour: { type: Sequelize.INTEGER, allowNull: false },
    price: { type: Sequelize.DOUBLE, allowNull: false },
    state: {
      type: Sequelize.STRING,
      defaultValue: "reserved",
    },
  },
  { sequelize: db, modelName: "reserve" }
);

module.exports = Reserves;
