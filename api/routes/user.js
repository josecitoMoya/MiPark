const express = require("express");
const router = express.Router();

const UserController = require("../controllers/user");

router.post("/register", UserController.registerUser);
router.post("/login", UserController.loginUser);
router.get("/logout", UserController.logOutUser);
router.get("/me", UserController.getUser);
router.put("/edit", UserController.modUser);
router.get("/:userId", UserController.findUser);

module.exports = router;
