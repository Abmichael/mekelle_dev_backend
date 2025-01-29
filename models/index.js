const { Sequelize } = require("sequelize");
const config = require("../config/config.json")["development"];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
    timezone: config.timezone,
  }
);

const models = {
  User: require("./User")(sequelize, Sequelize),
  //   News: require("./News")(sequelize, Sequelize),
  //   Event: require("./Event")(sequelize, Sequelize),
};

Object.values(models)
  .filter((model) => typeof model.associate === "function")
  .forEach((model) => model.associate(models));

module.exports = { sequelize, ...models };
