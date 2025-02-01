const router = require("express").Router();
const passport = require("passport");
const userController = require("../controllers/userController");
const { isAdmin } = require("../middlewares/roleMiddleware");

// Protected dashboard route
router.get(
  "/dashboard",
  passport.authenticate("jwt", { session: false }),
  userController.getDashboard
);

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  isAdmin,
  userController.getRegisteredUsers
);

module.exports = router;
