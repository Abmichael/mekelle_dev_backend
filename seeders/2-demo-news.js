module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert("News", [
      {
        id: 1,
        title: "New City Council Elected",
        content:
          "The recent municipal elections resulted in a new city council being elected. The new council members have promised to focus on improving infrastructure and public services.",
        category: "government",
        publishDate: "2025-02-15",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        title: "Health Center Expansion",
        content:
          "Construction begins on a new wing at Mekelle General Hospital. The expansion will include new operating rooms and patient wards to better serve the community.",
        category: "health",
        publishDate: "2025-03-01",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        title: "New Park Opens Downtown",
        content:
          "A new park has opened in the downtown area, providing a green space for residents to enjoy. The park features walking trails, playgrounds, and picnic areas.",
        category: "community",
        publishDate: "2025-04-10",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        title: "Local School Wins Award",
        content:
          "The local high school has won a national award for academic excellence. The award recognizes the school's commitment to providing high-quality education to its students.",
        category: "education",
        publishDate: "2025-05-05",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        title: "New Library Branch Opens",
        content:
          "A new branch of the city library has opened in the north end of town. The new branch offers a wide selection of books, as well as computer access and community programs.",
        category: "community",
        publishDate: "2025-06-20",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        title: "City Hosts Annual Marathon",
        content:
          "The city hosted its annual marathon this past weekend, with thousands of runners participating. The event raised money for local charities and brought the community together.",
        category: "sports",
        publishDate: "2025-07-15",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        title: "New Art Gallery Opens",
        content:
          "A new art gallery has opened in the downtown area, showcasing works by local artists. The gallery aims to promote the arts and provide a space for artists to display their work.",
        category: "arts",
        publishDate: "2025-08-01",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        title: "City Implements Recycling Program",
        content:
          "The city has implemented a new recycling program to reduce waste and promote sustainability. Residents are encouraged to recycle paper, plastic, and glass.",
        category: "environment",
        publishDate: "2025-09-10",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9,
        title: "New Community Center Opens",
        content:
          "A new community center has opened in the west end of town, offering a variety of programs and services for residents. The center includes a gym, a pool, and meeting rooms.",
        category: "community",
        publishDate: "2025-10-05",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10,
        title: "City Hosts Food Festival",
        content:
          "The city hosted its annual food festival this past weekend, featuring food from local restaurants and vendors. The event was a huge success, with thousands of people attending.",
        category: "events",
        publishDate: "2025-11-20",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("News", null, {});
  },
};
