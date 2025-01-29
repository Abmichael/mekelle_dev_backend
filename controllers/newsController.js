const { News } = require("../models");
const { Op } = require("sequelize");

module.exports = {
  async list(req, res) {
    try {
      const news = await News.findAll({
        order: [["publishDate", "DESC"]],
        limit: 20,
      });
      res.json(news);
    } catch (error) {
      console.log(error);

      res.status(500).json({ error: "Failed to fetch news" });
    }
  },

  async getById(req, res) {
    try {
      const newsItem = await News.findByPk(req.params.id);
      newsItem
        ? res.json(newsItem)
        : res.status(404).json({ error: "Not found" });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch news item" });
    }
  },

  async search(req, res) {
    try {
      const results = await News.findAll({
        where: {
          [Op.or]: [
            { title: { [Op.like]: `%${req.query.q}%` } },
            { content: { [Op.like]: `%${req.query.q}%` } },
          ],
        },
        limit: 10,
      });
      res.json(results);
    } catch (error) {
      res.status(500).json({ error: "Search failed" });
    }
  },
};
