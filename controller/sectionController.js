const Section = require("../models/sectionModel"); // Adjust the path to your Section 1 model

const updateSection = async (req, res) => {
  const sectionNumber = req.params.sectionNumber;
  const {
    text,
    image1,
    image2,
    image3,
    respimg1,
    respimg2,
    respimg3,
    videos,
    videosresp,
  } = req.body;

  try {
    // Find and update the section based on sectionNumber
    const updatedSection = await Section.findOneAndUpdate(
      { sectionNumber },
      {
        text,
        image1,
        image2,
        image3,
        respimg1,
        respimg2,
        respimg3,
        videos,
        videosresp,
      },
      { new: true }
    );

    res.json({
      message: "Section updated successfully",
      section: updatedSection,
    });
  } catch (error) {
    console.error("Error updating section:", error);
    res.status(500).json({ message: "Failed to update section" });
  }
};

const getSectionByNumber = async (req, res) => {
  try {
    const sectionNumber = req.params.sectionNumber;

    // Find data in Section model based on section number
    const sectionData = await Section.findOne({ sectionNumber });

    if (!sectionData) {
      return res.status(404).json({ message: "Section data not found" });
    }

    res.status(200).json(sectionData);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Create Sections

const createSections = async (req, res) => {
  const sectionsData = req.body;

  try {
    // Insert the sections data into the database
    const createdSections = await Section.create(sectionsData);
    res.json({
      message: "Sections created successfully",
      sections: createdSections,
    });
  } catch (error) {
    console.error("Error creating sections:", error);
    res.status(500).json({ message: "Failed to create sections" });
  }
};

module.exports = {
  updateSection,
  getSectionByNumber,
  createSections,
};
