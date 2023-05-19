const express = require("express");
const router = express.Router();

//ROUTES
const user = require("./user");
const parkings = require("./parkings");
const reserves = require("./reserves");

//Middlewares
router.use("/user", user);
router.use("/parkings", parkings);
router.use("/reserves", reserves);

module.exports = router;
