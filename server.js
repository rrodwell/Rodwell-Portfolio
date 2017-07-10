/**
 * Created by ryanrodwell on 7/10/17.
 */
// Include Server Dependencies
var express = require("express");

// Create Instance of Express
var app = express();
var PORT = process.env.PORT || 8080;


app.use(express.static("./public"));


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});

