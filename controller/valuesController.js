const Values = require("../models/valuesModel"); // Adjust the path to your Section 1 model

const updateValue = async (req, res) => {
  const partNumber = req.params.sectionNumber;
  const { heading, para } = req.body;

  try {
    // Find and update the section based on sectionNumber
    const updatedSection = await Values.findOneAndUpdate(
      { partNumber },
      { heading, para },
      { new: true }
    );

    res.json({
      message: "Value Part updated successfully",
      section: updatedSection,
    });
  } catch (error) {
    console.error("Error updating Value Part:", error);
    res.status(500).json({ message: "Failed to update Value" });
  }
};

const getValueByNumber = async (req, res) => {
  try {
    const partNumber = req.params.sectionNumber;

    // Find data in Section model based on section number
    const sectionData = await Values.findOne({ partNumber });

    if (!sectionData) {
      return res.status(404).json({ message: "Value data not found" });
    }

    res.status(200).json(sectionData);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error });
  }
};



const addValuesByNumber = async (req, res) => {
    try {
      const sectionNumber = req.params.sectionNumber;
        req.body.partNumber = parseInt(sectionNumber)

        console.log(req.body);
      // Find data in Section model based on section number
      const sectionData = await Values.create(req.body);
  
      if (!sectionData) {
        return res.status(404).json({ message: "value cannot added" });
      }
  
      res.status(200).json(sectionData);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };


module.exports = {
    updateValue,
    getValueByNumber,
    addValuesByNumber
};
