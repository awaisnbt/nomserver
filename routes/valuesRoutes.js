const express = require("express");
const valueController = require("../controller/valuesController"); // Adjust the path
const router = express.Router();

// route to update Section 1 data
router.post("/value/update/:sectionNumber", valueController.updateValue);

// Get Section data by section number
router.get("/value/part/:sectionNumber", valueController.getValueByNumber);

// Handle bulk section data insertion
router.post("/value/create/:sectionNumber", valueController.addValuesByNumber);

module.exports = router;
