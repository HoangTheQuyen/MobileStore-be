// External Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Internal Dependencies
const MongoConfig = require("./config/mongoConfig");
const _DefaultRoutes = require("./config/defaultRoutes");
const _Routes = require("./routes/index");
const router = require('express').Router()


// Main app
const app = express();

// Express configuration
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

// Main APIs
app.use(_DefaultRoutes.BASE_URL, _Routes);

mongoose.connect(MongoConfig.CONNECTION_STRING, {
    useNewUrlParser: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection: error!"));
db.once("open", () => {
  console.log("[MongoDB] Connected!");
});

app.use(express.static(__dirname + '/public'));

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


// Start server
const server = app.listen(3000, () => {
  console.log(`[PORT:${server.address().port}] Server is running...`);
});
