const express = require("express");
const servicecontroller = require("../controller/serviceController"); // Adjust the path
const router = express.Router();

// route to update Section 1 data
router.post("/service/update/:sectionNumber", servicecontroller.updateService);

// Get Section data by section number
router.get("/service/part/:sectionNumber", servicecontroller.getservicebynumber);

// Handle bulk section data insertion
router.post("/service/create/:sectionNumber", servicecontroller.Addservicenumber);

module.exports = router;
