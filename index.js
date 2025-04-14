
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 8000;

// MongoDB connection
require("./db");

// Middleware
app.use(bodyParser.json());


app.use(express.urlencoded({ extended: false }));

// Import and use routes
const personroutes = require('./routes/personroutes');
app.use("/person", personroutes);

// Start the server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
