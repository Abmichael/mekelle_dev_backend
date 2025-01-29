module.exports = (sequelize, DataTypes) => {
  return sequelize.define("ServiceFeedback", {
    comment: DataTypes.TEXT,
    rating: {
      type: DataTypes.INTEGER,
      validate: { min: 1, max: 5 },
    },
    status: {
      type: DataTypes.ENUM("pending", "resolved"),
      defaultValue: "pending",
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ServiceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
