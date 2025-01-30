const router = require("express").Router();
const mapController = require("../controllers/mapController");

router.get("/", mapController.getMapData);

module.exports = router;
