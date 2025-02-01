const router = require("express").Router();
const passport = require("passport");
const serviceController = require("../controllers/serviceController");
const { isCitizen } = require("../middlewares/roleMiddleware");

// Public routes
router.get("/", serviceController.listServices);
router.get("/:id", serviceController.getServiceDetails);
router.get("/:serviceId/feedback", serviceController.listServiceFeedback);

// Protected feedback route
router.post(
  "/:serviceId/feedback",
  passport.authenticate("jwt", { session: false }),
  isCitizen,
  serviceController.submitFeedback
);

router.patch(
  "/:serviceId/feedback/:feedbackId",
  passport.authenticate("jwt", { session: false }),
  isCitizen,
  serviceController.updateFeedback
);

module.exports = router;
