module.exports = {
  up: async (queryInterface) => {
    // Event Registrations
    await queryInterface.bulkInsert("EventRegistrations", [
      {
        UserId: 1,
        EventId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 2,
        EventId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    // Service Feedback
    await queryInterface.bulkInsert("ServiceFeedbacks", [
      {
        UserId: 2,
        ServiceId: 1,
        comment: "Quick response to my road repair request",
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    // Business Reviews
    await queryInterface.bulkInsert("BusinessReviews", [
      {
        UserId: 2,
        BusinessId: 1,
        rating: 5,
        comment: "Excellent service and beautiful rooms!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("EventRegistrations", null, {});
    await queryInterface.bulkDelete("ServiceFeedbacks", null, {});
    await queryInterface.bulkDelete("BusinessReviews", null, {});
  },
};
