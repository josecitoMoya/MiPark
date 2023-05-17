const Sequelize = require("sequelize");
const db = require("../db");

class Cart extends Sequelize.Model {}

Cart.init({
  hours: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: false,
    defaultValue:[]
  }
},{ sequelize: db, modelName: "cart" });

module.exports = Cart;
