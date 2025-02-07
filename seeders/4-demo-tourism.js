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
      {
        id: 3,
        name: "Debre Damo Monastery",
        description: "Ancient monastery accessible only by climbing a rope",
        category: "religious",
        location: "Debre Damo",
        latitude: 14.37,
        longitude: 39.2833,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        name: "Wukro Chirkos",
        description: "Rock-hewn church dating back to the 4th century",
        category: "religious",
        location: "Wukro",
        latitude: 13.79,
        longitude: 39.6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        name: "Negash Mosque",
        description: "One of the oldest mosques in Africa",
        category: "religious",
        location: "Negash",
        latitude: 13.88,
        longitude: 39.62,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        name: "Abreha we Atsbeha",
        description: "Rock-hewn church named after twin kings",
        category: "religious",
        location: "Hawzen",
        latitude: 13.88,
        longitude: 39.62,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        name: "Gheralta Mountains",
        description: "Famous for its rock formations and ancient churches",
        category: "natural",
        location: "Gheralta",
        latitude: 13.91,
        longitude: 39.19,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        name: "Yeha Temple",
        description: "Ruins of a temple dating back to the 8th century BC",
        category: "historical",
        location: "Yeha",
        latitude: 14.3,
        longitude: 39.5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9,
        name: "Adwa Mountains",
        description:
          "Site of the Battle of Adwa where Ethiopians defeated Italian forces",
        category: "historical",
        location: "Adwa",
        latitude: 14.16,
        longitude: 38.89,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10,
        name: "Axum Obelisks",
        description: "Ancient stelae marking the graves of kings",
        category: "historical",
        location: "Axum",
        latitude: 14.13,
        longitude: 38.72,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("TouristAttractions", null, {});
  },
};
