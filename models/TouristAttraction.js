module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "TouristAttraction",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: DataTypes.TEXT,
      location: DataTypes.STRING,
      category: {
        type: DataTypes.ENUM("historical", "museum", "park", "religious"),
        defaultValue: "historical",
      },
      latitude: DataTypes.FLOAT,
      longitude: DataTypes.FLOAT,
    },
    {
      timestamps: true,
    }
  );
};
