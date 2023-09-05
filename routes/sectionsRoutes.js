const express = require("express");
const sectionController = require("../controller/sectionController"); // Adjust the path
const router = express.Router();

// route to update Section 1 data
router.post("/update/:sectionNumber", sectionController.updateSection);

// Get Section data by section number
router.get("/section/:sectionNumber", sectionController.getSectionByNumber);

// Handle bulk section data insertion
router.post("/bulk-create", sectionController.createSections);

module.exports = router;
 