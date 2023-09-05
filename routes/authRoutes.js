const express = require("express");
const authController = require("../controller/authController"); // Adjust the path

const router = express.Router();

// Signup Route
router.post("/signup", authController.signup);

// Login route
router.post("/login", authController.login);

module.exports = router;
