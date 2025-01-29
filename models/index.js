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
  News: require("./News")(sequelize, Sequelize),
  Event: require("./Event")(sequelize, Sequelize),
  EventRegistration: require("./EventRegistration")(sequelize, Sequelize),
  TouristAttraction: require("./TouristAttraction")(sequelize, Sequelize),
  Service: require("./Service")(sequelize, Sequelize),
  ServiceFeedback: require("./ServiceFeedback")(sequelize, Sequelize),
  Business: require("./Business")(sequelize, Sequelize),
  BusinessReview: require("./BusinessReview")(sequelize, Sequelize),
};

models.User.belongsToMany(models.Event, { through: "EventRegistration" });
models.Event.belongsToMany(models.User, { through: "EventRegistration" });
models.User.hasMany(models.ServiceFeedback);
models.Service.hasMany(models.ServiceFeedback);
models.ServiceFeedback.belongsTo(models.User);
models.ServiceFeedback.belongsTo(models.Service);

models.User.hasMany(models.BusinessReview);
models.Business.hasMany(models.BusinessReview);
models.BusinessReview.belongsTo(models.User);
models.BusinessReview.belongsTo(models.Business);

Object.values(models)
  .filter((model) => typeof model.associate === "function")
  .forEach((model) => model.associate(models));

module.exports = { sequelize, ...models };
