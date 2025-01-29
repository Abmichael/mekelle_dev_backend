const { TouristAttraction } = require("../models");

// Temporary mock data for demonstration
const MOCK_ATTRACTIONS = [
  {
    name: "Hatsey Yohannes Museum",
    description: "Historical museum showcasing Tigray's heritage",
    category: "museum",
    location: "City Center",
  },
];

module.exports = {
  async list(req, res) {
    try {
      // Try database first, fallback to mock data
      const attractions =
        (await TouristAttraction.findAll()) || MOCK_ATTRACTIONS;
      res.json(attractions);
    } catch (error) {
      res.json(MOCK_ATTRACTIONS); // Fallback if DB fails
    }
  },
};
