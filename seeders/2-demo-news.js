module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert("News", [
      {
        id: 1,
        title: "New City Council Elected",
        content: "The recent municipal elections resulted in...",
        category: "government",
        publishDate: "2025-02-15",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        title: "Health Center Expansion",
        content:
          "Construction begins on new wing at Mekelle General Hospital...",
        category: "health",
        publishDate: "2025-03-01",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("News", null, {});
  },
};
