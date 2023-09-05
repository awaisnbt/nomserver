const express = require("express");
const messageController = require("../controller/messageController");
const router = express.Router();

// route to get all messages
router.get("/get-messages", messageController.getAllMessages);

// route to delete a message
router.delete("/delete-message/:id", messageController.deleteMessage);

module.exports = router;
