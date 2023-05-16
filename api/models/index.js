const Users = require("./Users.js");
const Parkings = require("./Parkings.js");
//const Bookings = require("./Bookings.js");
const Carts = require("./Carts.js");
const Hours = require("./Hours.js");

//LA COCHERA VA A TENER UN USUARIO DUEÑO? CONSIDERANDO QUE SOLO LAS VA A CREAR EL ADMIN...
Parkings.belongsTo(Users, { as: "owner" });
//Bookings.belongsTo(Users, { as: "client" });
//Bookings.belongsTo(Parkings, { as: "parkingOwner" });
Carts.belongsTo(Users, { as: "client" });
Carts.belongsTo(Parkings, { as: "parking" });
Hours.belongsTo(Parkings, { as: "parking" });

//CUANDO ESTÉ LISTO EL MODELO DE RESERVAS/BOOKINGS, AGREGAR AL MODULE EXPORTS
module.exports = { Parkings, Users, Carts, Hours };
