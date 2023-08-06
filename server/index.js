const express = require('express');
const mongoose = require('mongoose');
const port = 3000;
require('dotenv').config();
const bodyParser = require('body-parser');
const app = express();

// middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// secrets and connection uri
const URI = process.env.connectionStr;

// connecting to database
mongoose.connect(URI);
app.listen(port, () => {
    console.log("server listening on port 3000");
});