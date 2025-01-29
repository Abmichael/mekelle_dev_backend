module.exports = (sequelize, DataTypes) => {
  return sequelize.define("BusinessReview", {
    rating: {
      type: DataTypes.INTEGER,
      validate: { min: 1, max: 5 },
    },
    comment: DataTypes.TEXT,
  });
};
