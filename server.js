/**
 * Created by ryanrodwell on 7/10/17.
 */
// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");

var appController = require("./controller/routes");

// Create Instance of Express
var app = express();
var PORT = process.env.PORT || 8080;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

app.use("/", appController);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});

