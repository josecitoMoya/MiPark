const Users = require("./Users.js");
const Parkings = require("./Parkings.js");
const Reserves = require("./Reserves");
const Hours = require("./Hours.js");

Parkings.belongsTo(Users, { as: "owner" });
Reserves.belongsTo(Users, { as: "client" });
Reserves.belongsTo(Parkings, { as: "parking" });
Hours.belongsTo(Parkings, { as: "parking" });

module.exports = { Parkings, Users, Reserves, Hours };
