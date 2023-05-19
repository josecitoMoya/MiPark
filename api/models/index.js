const Users = require("./Users.js");
const Parkings = require("./Parkings.js");
const Reserves = require("./Reserves");

Parkings.belongsTo(Users, { as: "owner" });
Reserves.belongsTo(Users, { as: "client" });
Reserves.belongsTo(Parkings, { as: "parking" });

module.exports = { Parkings, Users, Reserves };
