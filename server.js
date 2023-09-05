const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const emailRoutes = require("./routes/emailRoutes");
const MessageRoutes = require("./routes/messagesRoutes");
const SectionRoutes = require("./routes/sectionsRoutes");
const ValueRoutes = require("./routes/valuesRoutes");
const serviceroutes = require("./routes/serviceRoutes");

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Environment variable checks
if (!process.env.Mongo_URI) {
  console.error("Mongo_URI not defined in the environment variables.");
  process.exit(1);
}

if (!process.env.PORT) {
  console.error("PORT not defined in the environment variables.");
  process.exit(1);
}

// Database connection
const url = process.env.Mongo_URI;
mongoose
  .connect(url)
  .then(() => {
    console.log("Db Connected");
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });

// Routes

app.use(authRoutes);
app.use(emailRoutes);
app.use(MessageRoutes);
app.use(SectionRoutes);
app.use(ValueRoutes);
app.use(serviceroutes);

app.get("/", (req, res) => {
  res.send(`
      <div style="height: 100vh; width: 100%; display: flex; justify-content: center; align-items: center;">
        <h1 style="color: #ff5733;">NomAdz server Sucessfully run</h1>
      </div>
    `);
});
// #ff5733
// Graceful shutdown
const server = app
  .listen(process.env.PORT, () => {
    console.log(`Server is Running on ${process.env.PORT}`);
  })
  .on("error", (err) => {
    console.error("Server startup error:", err);
  });

process.on("SIGINT", () => {
  console.log("Shutting down server...");
  server.close(() => {
    console.log("Server closed.");
    mongoose.disconnect(() => {
      console.log("Database disconnected.");
      process.exit(0);
    });
  });
});
