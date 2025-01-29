module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Service", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: DataTypes.TEXT,
    contact: DataTypes.STRING,
    hours: DataTypes.STRING,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
    category: {
      type: DataTypes.ENUM("tax", "utilities", "permits", "emergency"),
    },
  });
};
