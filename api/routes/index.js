const express = require("express");
const router = express.Router();

//ROUTES
const user = require("./user");
const parkings = require("./parkings")

//Middlewares
router.use("/user", user);
router.use("/parkings", parkings)

module.exports = router;
