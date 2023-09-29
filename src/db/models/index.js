const dbConnection = require("../connection");
dbConnection();


const models = {
  Education: require("./education.model"),
  Job: require("./job.model"),
  Languaje: require("./language.model"),
  Profile: require("./profile.model"),
  Project: require("./project.model"),
  User: require("./user.model"),
};

module.exports = models;

