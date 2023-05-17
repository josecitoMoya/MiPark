const Sequelize = require("sequelize");
const db = require("../db/index.js");

class Hours extends Sequelize.Model {}

Hours.init(
  {
    0: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
    1: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
    2: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
    3: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
    4: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
    5: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
    6: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
    7: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
    8: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
    9: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
    10: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
    11: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
    12: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
    13: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
    14: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
    15: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
    16: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
    17: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
    18: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
    19: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
    20: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
    21: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
    22: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
    23: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
  },
  { sequelize: db, modelName: "hours" }
);

module.exports = Hours;
