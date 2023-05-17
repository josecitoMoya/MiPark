const express = require("express");
const router = express.Router();

//ROUTES
const user = require("./user");
const parkings = require("./parkings")
const cart = require("./cart")

//Middlewares
router.use("/user", user);
router.use("/parkings", parkings);
router.use("/cart",cart);

module.exports = router;
