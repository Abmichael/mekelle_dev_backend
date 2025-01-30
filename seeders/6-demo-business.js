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
		latitude: 13.4969,
		longitude: 39.4767,
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
		latitude: 13.4969,
		longitude: 39.4767,
		createdAt: new Date(),
		updatedAt: new Date(),
	  },
	  {
		id: 3,
		name: "Axum Hotel",
		description: "Luxury hotel with modern amenities",
		address: "Kebele 15",
		phone: "+251-914-112233",
		category: "hotel",
		latitude: 13.4970,
		longitude: 39.4770,
		createdAt: new Date(),
		updatedAt: new Date(),
	  },
	  {
		id: 4,
		name: "Mekelle University Bookstore",
		description: "Bookstore with academic and general books",
		address: "Mekelle University Campus",
		phone: "+251-914-223344",
		category: "store",
		latitude: 13.4971,
		longitude: 39.4771,
		createdAt: new Date(),
		updatedAt: new Date(),
	  },
	  {
		id: 5,
		name: "Abreha Castle Restaurant",
		description: "Fine dining with a view of the castle",
		address: "Castle Road",
		phone: "+251-914-334455",
		category: "restaurant",
		latitude: 13.4972,
		longitude: 39.4772,
		createdAt: new Date(),
		updatedAt: new Date(),
	  },
	  {
		id: 6,
		name: "Mekelle Grand Mall",
		description: "Shopping mall with various stores",
		address: "Main Street",
		phone: "+251-914-445566",
		category: "mall",
		latitude: 13.4973,
		longitude: 39.4773,
		createdAt: new Date(),
		updatedAt: new Date(),
	  },
	  {
		id: 7,
		name: "Tigray Cultural Center",
		description: "Cultural center showcasing Tigray heritage",
		address: "Cultural Road",
		phone: "+251-914-556677",
		category: "center",
		latitude: 13.4974,
		longitude: 39.4774,
		createdAt: new Date(),
		updatedAt: new Date(),
	  },
	  {
		id: 8,
		name: "Mekelle General Hospital",
		description: "Hospital providing comprehensive healthcare",
		address: "Hospital Road",
		phone: "+251-914-667788",
		category: "hospital",
		latitude: 13.4975,
		longitude: 39.4775,
		createdAt: new Date(),
		updatedAt: new Date(),
	  },
	  {
		id: 9,
		name: "Red Sea Cafe",
		description: "Cafe with a variety of beverages and snacks",
		address: "Red Sea Street",
		phone: "+251-914-778899",
		category: "cafe",
		latitude: 13.4976,
		longitude: 39.4776,
		createdAt: new Date(),
		updatedAt: new Date(),
	  },
	  {
		id: 10,
		name: "Mekelle Cinema",
		description: "Cinema showing the latest movies",
		address: "Cinema Road",
		phone: "+251-914-889900",
		category: "cinema",
		latitude: 13.4977,
		longitude: 39.4777,
		createdAt: new Date(),
		updatedAt: new Date(),
	  },
	  {
		id: 11,
		name: "Tigray Fitness Center",
		description: "Gym with modern fitness equipment",
		address: "Fitness Street",
		phone: "+251-914-990011",
		category: "gym",
		latitude: 13.4978,
		longitude: 39.4778,
		createdAt: new Date(),
		updatedAt: new Date(),
	  },
	  {
		id: 12,
		name: "Mekelle Bakery",
		description: "Bakery with fresh bread and pastries",
		address: "Bakery Road",
		phone: "+251-914-101112",
		category: "bakery",
		latitude: 13.4979,
		longitude: 39.4779,
		createdAt: new Date(),
		updatedAt: new Date(),
	  },
	  {
		id: 13,
		name: "Tigray Electronics",
		description: "Store selling electronic gadgets",
		address: "Electronics Street",
		phone: "+251-914-121314",
		category: "store",
		latitude: 13.4980,
		longitude: 39.4780,
		createdAt: new Date(),
		updatedAt: new Date(),
	  },
	  {
		id: 14,
		name: "Mekelle Pharmacy",
		description: "Pharmacy with a wide range of medicines",
		address: "Pharmacy Road",
		phone: "+251-914-131415",
		category: "pharmacy",
		latitude: 13.4981,
		longitude: 39.4781,
		createdAt: new Date(),
		updatedAt: new Date(),
	  },
	  {
		id: 15,
		name: "Tigray Fashion Boutique",
		description: "Boutique with the latest fashion trends",
		address: "Fashion Street",
		phone: "+251-914-141516",
		category: "boutique",
		latitude: 13.4982,
		longitude: 39.4782,
		createdAt: new Date(),
		updatedAt: new Date(),
	  },
	  {
		id: 16,
		name: "Mekelle Car Rental",
		description: "Car rental service with a variety of vehicles",
		address: "Car Rental Road",
		phone: "+251-914-151617",
		category: "car rental",
		latitude: 13.4983,
		longitude: 39.4783,
		createdAt: new Date(),
		updatedAt: new Date(),
	  },
	  {
		id: 17,
		name: "Tigray Travel Agency",
		description: "Travel agency offering various travel packages",
		address: "Travel Street",
		phone: "+251-914-161718",
		category: "travel agency",
		latitude: 13.4984,
		longitude: 39.4784,
		createdAt: new Date(),
		updatedAt: new Date(),
	  },
	  {
		id: 18,
		name: "Mekelle Hardware Store",
		description: "Store selling hardware and construction materials",
		address: "Hardware Road",
		phone: "+251-914-171819",
		category: "store",
		latitude: 13.4985,
		longitude: 39.4785,
		createdAt: new Date(),
		updatedAt: new Date(),
	  },
	  {
		id: 19,
		name: "Tigray Beauty Salon",
		description: "Salon offering beauty and hair services",
		address: "Beauty Street",
		phone: "+251-914-181920",
		category: "salon",
		latitude: 13.4986,
		longitude: 39.4786,
		createdAt: new Date(),
		updatedAt: new Date(),
	  },
	  {
		id: 20,
		name: "Mekelle Pet Shop",
		description: "Pet shop with a variety of pets and supplies",
		address: "Pet Street",
		phone: "+251-914-192021",
		category: "pet shop",
		latitude: 13.4987,
		longitude: 39.4787,
		createdAt: new Date(),
		updatedAt: new Date(),
	  },
	]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("Businesses", null, {});
  },
};
