const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema({
  sectionNumber: { type: Number, required: true },
  text: String,
  image1: String,
  image2: String,
  image3: String,
  respimg1: String,
  respimg2: String,
  respimg3: String,
  videos:String,
  videosresp:String

});

const Section = mongoose.model("Section", sectionSchema);

module.exports = Section;
