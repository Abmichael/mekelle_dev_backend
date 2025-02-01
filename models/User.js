module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM("citizen", "admin"),
        defaultValue: "citizen",
      },
    },
    {
      timestamps: true,
    }
  );

  User.beforeSave(async (user) => {
    if (user.changed("password")) {
      user.password = await require("bcryptjs").hash(user.password, 10);
    }
  });

  return User;
};
