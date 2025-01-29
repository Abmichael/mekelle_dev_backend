module.exports = (sequelize, DataTypes) => {
  return sequelize.define("EventRegistration", {
    UserId: {
      type: DataTypes.INTEGER,
      references: { model: "Users", key: "id" },
    },
    EventId: {
      type: DataTypes.INTEGER,
      references: { model: "Events", key: "id" },
    },
  });
};
