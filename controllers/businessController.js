const { Business, BusinessReview } = require("../models");
const { Op } = require("sequelize");

module.exports = {
  async listBusinesses(req, res) {
    try {
      const businesses = await Business.findAll({
        where: req.query.category ? { category: req.query.category } : {},
        include: [
          {
            model: BusinessReview,
            attributes: ["rating"],
          },
        ],
      });
      res.json(businesses);
    } catch (error) {
      res.status(500).json({ error: "Failed to load businesses" });
    }
  },

  async getBusinessDetails(req, res) {
    try {
      const business = await Business.findByPk(req.params.id, {
        include: [
          {
            model: BusinessReview,
            include: ["User"],
          },
        ],
      });
      business ? res.json(business) : res.status(404).end();
    } catch (error) {
      res.status(500).json({ error: "Failed to load business" });
    }
  },

  async createReview(req, res) {
    try {
      const review = await BusinessReview.create({
        ...req.body,
        UserId: req.user.id,
        BusinessId: req.params.businessId,
      });
      res.status(201).json(review);
    } catch (error) {
      res.status(400).json({ error: "Review submission failed" });
    }
  },
};
