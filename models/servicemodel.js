const mongoose = require("mongoose");

const Servicescheema = new mongoose.Schema({
  heading: String,
  para: String,
  partNumber: Number,
  createdAt: { type: Date, default: Date.now },
});

const Services = mongoose.model("Services", Servicescheema);

module.exports = Services;
