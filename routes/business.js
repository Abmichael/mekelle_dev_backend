const router = require("express").Router();
const passport = require("passport");
const businessController = require("../controllers/businessController");

// Public routes
router.get("/", businessController.listBusinesses);
router.get("/:id", businessController.getBusinessDetails);

// Protected review route
router.post(
  "/:businessId/reviews",
  passport.authenticate("jwt", { session: false }),
  businessController.createReview
);

module.exports = router;
