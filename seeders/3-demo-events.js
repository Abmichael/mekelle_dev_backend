module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert("Events", [
      {
        id: 1,
        title: "Cultural Food Festival",
        description: "Annual celebration of Tigrayan cuisine",
        date: "2025-03-25 10:00:00",
        location: "Mekelle Stadium",
        category: "cultural",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        title: "Public Budget Meeting",
        description: "Town hall discussion of city finances",
        date: "2025-04-01 14:30:00",
        location: "City Hall Auditorium",
        category: "government",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("Events", null, {});
  },
};
