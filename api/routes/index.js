const express = require("express");
const router = express.Router();

//ROUTES
const user = require("./user");
const parkings = require("./parkings");
const reserves = require("./reserves");
const admin = require("./admin");

//Middlewares
router.use("/admin", admin)
router.use("/user", user);
router.use("/parkings", parkings);
router.use("/reserves", reserves);

module.exports = router;
