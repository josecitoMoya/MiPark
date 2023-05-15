const Sequelize = require("sequelize");
const db = require("../db");

class Cart extends Sequelize.Model {}

Cart.init({
  hour: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  cantHours: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
  },
});

module.exports = Cart;
