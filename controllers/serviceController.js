const { Service, ServiceFeedback } = require("../models");
const { Op } = require("sequelize");

module.exports = {
  async listServices(req, res) {
    try {
      const services = await Service.findAll({
        where: req.query.category ? { category: req.query.category } : {},
        order: [["name", "ASC"]],
      });
      res.json(services);
    } catch (error) {
      res.status(500).json({ error: "Failed to load services" });
    }
  },

  async getServiceDetails(req, res) {
    try {
      const service = await Service.findByPk(req.params.id, {
        include: [
          {
            model: ServiceFeedback,
            include: ["User"],
          },
        ],
      });
      service ? res.json(service) : res.status(404).end();
    } catch (error) {
      res.status(500).json({ error: "Failed to load service" });
    }
  },

  async submitFeedback(req, res) {
    try {
      const feedback = await ServiceFeedback.create({
        ...req.body,
        UserId: req.user.id,
        ServiceId: +req.params.serviceId,
      });
      res.status(201).json(feedback);
    } catch (error) {
      console.log(error);

      res.status(400).json({ error: "Feedback submission failed" });
    }
  },

  async updateFeedback(req, res) {
    try {
      const feedback = await ServiceFeedback.findOne({
        where: {
          id: req.params.feedbackId,
          UserId: req.user.id,
        },
      });

      if (!feedback)
        return res.status(404).json({ error: "Feedback not found" });

      await feedback.update(req.body);
      res.json(feedback);
    } catch (error) {
      res.status(400).json({ error: "Update failed" });
    }
  },

  async listServiceFeedback(req, res) {
    try {
      const feedbacks = await ServiceFeedback.findAll({
        where: { ServiceId: req.params.serviceId },
        include: ["User"],
        order: [["createdAt", "DESC"]],
      });
      res.json(feedbacks);
    } catch (error) {
      res.status(500).json({ error: "Failed to load feedbacks" });
    }
  },
};
