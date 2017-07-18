/**
 * Created by ryanrodwell on 7/10/17.
 */
var express = require("express");
var router = express.Router();
var path = require("path");

router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/videos/advancedtrivia", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/videos/advancedtrivia.html"));
});

router.get("/videos/psychicgame", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/videos/psychicgame.html"));
});

router.get("/videos/illegalformation", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/videos/illegalformation.html"));
});

router.get("/videos/stylecast", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/videos/stylecast.html"));
});

router.get("/videos/liri", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/videos/liri.html"));
});

router.get("/videos/flashcards", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/videos/flashcards.html"));
});

router.get("/videos/trainschedule", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/videos/trainschedule.html"));
});

router.get("/videos/burger", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/videos/burger.html"));
});

module.exports = router;