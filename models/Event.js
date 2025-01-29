module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Event",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.ENUM("cultural", "government", "public", "holiday"),
      },
    },
    {
      timestamps: true,
    }
  );
};
