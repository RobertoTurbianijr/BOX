var express = require("express");
var router = express.Router();

var pilotoController = require("../controllers/pilotoController");

router.get("/listarPilotos", function (req, res) {
    pilotoController.listarPilotos(req, res);
});

module.exports = router;