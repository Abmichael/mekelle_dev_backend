const router = require("express").Router();
const passport = require("passport");
const businessController = require("../controllers/businessController");
const { isCitizen } = require("../middlewares/roleMiddleware");

// Public routes
router.get("/", businessController.listBusinesses);
router.get("/:id", businessController.getBusinessDetails);

// Protected review route
router.post(
  "/:businessId/reviews",
  passport.authenticate("jwt", { session: false }),
  isCitizen,
  businessController.createReview
);

module.exports = router;
