/**
 * Created by ryanrodwell on 7/10/17.
 */
var express = require("express");
var router = express.Router();
var path = require("path");

router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/videos/burger_demo", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/videos/burger_demo.html"));
});


module.exports = router;