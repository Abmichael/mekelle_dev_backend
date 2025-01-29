const router = require("express").Router();
const passport = require("passport");
const userController = require("../controllers/userController");

// Protected dashboard route
router.get(
  "/dashboard",
  passport.authenticate("jwt", { session: false }),
  userController.getDashboard
);

module.exports = router;
