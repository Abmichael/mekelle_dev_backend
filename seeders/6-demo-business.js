module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert("Businesses", [
      {
        id: 1,
        name: "Mekelle Plaza Hotel",
        description: "4-star hotel with conference facilities",
        address: "Hawelti Street",
        phone: "+251-914-445566",
        category: "hotel",
        latitude: 13.5969,
        longitude: 39.1767,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: "Tigray Artisan Cafe",
        description: "Traditional coffee house with local crafts",
        address: "Atse Yohannes Road",
        phone: "+251-914-778899",
        category: "restaurant",
        latitude: 12.4969,
        longitude: 38.4767,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("Businesses", null, {});
  },
};
