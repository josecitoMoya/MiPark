const express = require("express");
const router = express.Router();

//ROUTES
const user = require("./user");

//Middlewares
router.use("/user", user);

module.exports = router;
