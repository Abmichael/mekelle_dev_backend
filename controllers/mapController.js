// controllers/mapController.js
const { TouristAttraction, Business, Service } = require("../models");

module.exports = {
  async getMapData(req, res) {
    try {
      const [attractions, businesses, services] = await Promise.all([
        TouristAttraction.findAll({
          attributes: ["id", "name", "latitude", "longitude", "category"],
        }),
        Business.findAll({
          attributes: ["id", "name", "latitude", "longitude", "category"],
        }),
        Service.findAll({
          attributes: ["id", "name", "latitude", "longitude", "category"],
        }),
      ]);

      res.json({
        attractions,
        businesses,
        services,
      });
    } catch (error) {
      res.status(500).json({ error: "Failed to load map data" });
    }
  },
};
