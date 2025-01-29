module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert("TouristAttractions", [
      {
        id: 1,
        name: "Hatsey Yohannes Museum",
        description: "Former palace of Emperor Yohannes IV",
        category: "historical",
        location: "Downtown Mekelle",
        latitude: 13.4969,
        longitude: 39.4767,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: "Martyrs' Memorial Museum",
        description: "Commemorating those who fell during the struggle",
        category: "museum",
        location: "Adi Haqi",
        latitude: 13.4936,
        longitude: 39.4694,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("TouristAttractions", null, {});
  },
};
