const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const passport = require("passport");

require("./config/passport")(passport);
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());

// Simple health check endpoint
app.get("/health", (req, res) => res.send("OK"));

const authRoutes = require("./routes/auth");
const newsRoutes = require("./routes/news");
const eventRoutes = require("./routes/events");
const userRoutes = require("./routes/user");
const tourismRoutes = require('./routes/tourism');
const serviceRoutes = require('./routes/services');
const businessRoutes = require('./routes/business');

app.use('/api/businesses', businessRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/tourism', tourismRoutes);
app.use("/api/user", userRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/news", newsRoutes);

module.exports = app;
