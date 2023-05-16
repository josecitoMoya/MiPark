const Sequelize = require("sequelize");
const db = require("../db/index.js");

class Parkings extends Sequelize.Model {}

Parkings.init(
  {
    address: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    barrio: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    ciudad: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    provincia: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    coordinates: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    pricePerHour: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    roof: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    vehicleType: {
      type: Sequelize.STRING,
      defaultValue: "car",
    },
  },
  { sequelize: db, modelName: "parkings" }
);

module.exports = Parkings;