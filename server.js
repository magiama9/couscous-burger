// Express
// ===============================================
const express = require("express");
const app = express(); // Initialize Express
const PORT = process.env.PORT || 8080; // Sets port to use host server port or 8080 for development
const path = require("path");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public")); // Static directory

// Routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// ===============================================

// Mongoose
// ===============================================
const mongoose = require("mongoose");

// Models
const db = require("./models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true
});

// ===============================================

// Starts server listening
app.listen(PORT, function() {
  console.log("Listening on port %s", PORT);
});
