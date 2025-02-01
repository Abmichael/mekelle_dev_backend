const { News, Event, Sequelize, User } = require("../models");
const { Op } = require("sequelize");

module.exports = {
  async getDashboard(req, res) {
    try {
      // Parallel data fetching for efficiency
      const [news, upcomingEvents, registeredEvents] = await Promise.all([
        News.findAll({
          order: [["publishDate", "DESC"]],
          limit: 5,
        }),
        Event.findAll({
          where: { date: { [Op.gte]: new Date() } },
          order: [["date", "ASC"]],
          limit: 5,
        }),
        req.user.getEvents({
          where: { date: { [Op.gte]: new Date() } },
          order: [["date", "ASC"]],
        }),
      ]);

      res.json({
        news,
        upcomingEvents,
        registeredEvents,
      });
    } catch (error) {
      console.error("Dashboard error:", error);
      res.status(500).json({ error: "Failed to load dashboard" });
    }
  },
  async getRegisteredUsers(req, res) {
    try {
      const users = await User.findAll({
        attributes: ["id", "email", "createdAt"],
        order: [["createdAt", "DESC"]],
      });

      res.json(users);
    } catch (error) {
      console.error("Error fetching registered users:", error);
      res.status(500).json({ error: "Failed to fetch registered users" });
    }
  },
};
