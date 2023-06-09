const express = require("express");
const router = express.Router();

const UserController = require("../controllers/user");

router.post("/register", UserController.registerUser);
router.get("/login", UserController.loginUser);
router.get("/logout", UserController.logOutUser);
router.get("/me", UserController.getUser);
router.put("/edit", UserController.modUser);

module.exports = router;
