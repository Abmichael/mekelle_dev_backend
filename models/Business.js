module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Business", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: DataTypes.TEXT,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
    category: {
      type: DataTypes.ENUM("restaurant", "hotel", "shop", "service"),
      defaultValue: "shop",
    },
  });
};
