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
      {
        UserId: 3,
        EventId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 2,
        EventId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 3,
        EventId: 4,
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
      {
        UserId: 3,
        ServiceId: 3,
        comment: "Very satisfied with the plumbing service",
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 1,
        ServiceId: 2,
        comment: "Friendly staff but the service took a bit long",
        rating: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 2,
        ServiceId: 4,
        comment: "Great electrician, solved my problem quickly",
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 3,
        ServiceId: 5,
        comment: "Not bad, but could improve on response time",
        rating: 3,
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
      {
        UserId: 1,
        BusinessId: 8,
        rating: 4,
        comment: "Great ambiance and friendly staff",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 2,
        BusinessId: 15,
        rating: 2,
        comment: "Service was slow, and food was overpriced",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 3,
        BusinessId: 10,
        rating: 5,
        comment: "Best shopping experience I've had!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 3,
        BusinessId: 20,
        rating: 3,
        comment: "Decent products but customer service could be better",
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
