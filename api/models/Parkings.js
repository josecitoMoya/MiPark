const Sequelize = require("sequelize");
const db = require("../db/index.js");

class Parkings extends Sequelize.Model {}

Parkings.init(
  {
    address: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    zone: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    city: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    province: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    from_hour: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    to_hour: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price_per_hour: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    roof: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    van_able: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    image: {
      type: Sequelize.STRING,
      defaultValue:
        "https://static.tokkobroker.com/pictures/81485106017997863420224328799196031790185228762980714819055081839658331778906.jpg",
    },
    authorized: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    dropped: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
  },
  { sequelize: db, modelName: "parkings" }
);

module.exports = Parkings;
