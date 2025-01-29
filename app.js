const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const passport = require("passport");

require('./config/passport')(passport); 
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());

// Simple health check endpoint
app.get("/health", (req, res) => res.send("OK"));

const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

module.exports = app;
