const router = require("express").Router();
const newsController = require("../controllers/newsController");

router.get("/", newsController.list);
router.get("/search", newsController.search);
router.get("/:id", newsController.getById);

module.exports = router;
