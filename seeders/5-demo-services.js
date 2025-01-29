module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert("Services", [
      {
        id: 1,
        name: "Public Works Department",
        description: "Responsible for city infrastructure maintenance",
        contact: "+251-914-123456",
        hours: "Mon-Fri 8:30AM-5:30PM",
        category: "utilities",
        latitude: 13.4169,
        longitude: 39.4767,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: "Business Licensing Office",
        description: "New business registration and permits",
        contact: "license@mekelle.gov.et",
        hours: "Mon-Wed-Fri 9AM-3PM",
        category: "permits",
        latitude: 13.4969,
        longitude: 39.6767,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("Services", null, {});
  },
};
