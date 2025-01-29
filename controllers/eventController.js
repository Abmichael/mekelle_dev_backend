const { Sequelize } = require("sequelize");
const { Event, EventRegistration } = require("../models");

module.exports = {
  async createEvent(req, res) {
    try {
      const event = await Event.create(req.body);
      res.status(201).json(event);
    } catch (error) {
      res.status(400).json({ error: "Event creation failed" });
    }
  },

  async listUpcoming(req, res) {
    try {
      const events = await Event.findAll({
        where: { date: { [Sequelize.Op.gte]: new Date() } },
        order: [["date", "ASC"]],
      });
      res.json(events);
    } catch (error) {
      console.log(error);

      res.status(500).json({ error: "Failed to fetch events" });
    }
  },

  async getEventDetails(req, res) {
    try {
      const event = await Event.findByPk(req.params.id, {
        include: [{ model: User, attributes: ["id", "email"] }],
      });
      event
        ? res.json(event)
        : res.status(404).json({ error: "Event not found" });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch event" });
    }
  },

  async registerForEvent(req, res) {
    try {
      const registration = await EventRegistration.create({
        UserId: req.user.id,
        EventId: req.params.eventId,
      });
      res.status(201).json(registration);
    } catch (error) {
      res.status(400).json({ error: "Registration failed" });
    }
  },
};
