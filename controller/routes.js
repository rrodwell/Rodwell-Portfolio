/**
 * Created by ryanrodwell on 7/10/17.
 */
var express = require("express");
var router = express.Router();
var path = require("path");

router.get("/", function(req, res) {
    var hsObj = {
        title: "Home | Ryan Rodwell"
    };
    res.render("home", hsObj);
});

router.get("/about", function(req, res) {
    var hbsObject = {
        title: "About | Ryan Rodwell"
    };
    res.render("about", hbsObject);
});

router.get("/projects", function(req, res) {
    var hbsObject = {
        title: "Projects | Ryan Rodwell"
    };
    res.render("projects", hbsObject);
});

router.get("/contact", function(req, res) {
    var hbsObject = {
        title: "Contact | Ryan Rodwell"
    };
    res.render("contact", hbsObject);
});

router.get("/technologies", function(req, res) {
    var hbsObject = {
        title: "Technologies | Ryan Rodwell"
    };
    res.render("technologies", hbsObject);
});

router.get("/videos/advancedtrivia", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/videos/advancedtrivia.html"));
});

router.get("/videos/signaturefd", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/videos/signaturefd.html"));
});

router.get("/videos/bamazon", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/videos/bamazon.html"));
});

router.get("/videos/illegalformation", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/videos/illegalformation.html"));
});

router.get("/videos/stylecast", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/videos/stylecast.html"));
});

router.get("/videos/cheeriomongo", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/videos/cheeriomongo.html"));
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