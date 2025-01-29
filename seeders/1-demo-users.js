const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface) => {
    const users = await Promise.all([
      {
        id: 1,
        email: "admin@mekelle.app",
        password: await bcrypt.hash("Admin123!", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        email: "user1@test.com",
        password: await bcrypt.hash("User123!", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        email: "tourist@example.com",
        password: await bcrypt.hash("Tourist123!", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("Users", users);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
