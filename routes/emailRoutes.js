const express = require("express");
const emailController = require("../controller/emailController");
const router = express.Router();

router.post("/send-email", emailController.sendContactEmail);

module.exports = router;
