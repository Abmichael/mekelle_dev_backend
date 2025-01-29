const router = require("express").Router();
const newsController = require("../controllers/newsController");

// Public endpoints (no authentication required)
router.get("/", newsController.list);
router.get("/search", newsController.search);
router.get("/:id", newsController.getById);

module.exports = router;
