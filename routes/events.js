const router = require("express").Router();
const passport = require("passport");
const eventController = require("../controllers/eventController");
const { isAdmin } = require("../middlewares/roleMiddleware");

// Public routes
router.get("/", eventController.listUpcoming);
router.get("/:id", eventController.getEventDetails);

// Protected routes
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  isAdmin,
  eventController.createEvent
);

router.post(
  "/:eventId/register",
  passport.authenticate("jwt", { session: false }),
  eventController.registerForEvent
);

module.exports = router;
