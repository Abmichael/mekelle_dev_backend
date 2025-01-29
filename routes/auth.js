const router = require("express").Router();
const passport = require("passport");
const authController = require("../controllers/authController");

router.post("/signup", authController.signup);
router.post("/login", authController.login);

// Example protected route
router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  (req, res) => res.json({ user: req.user })
);

module.exports = router;
