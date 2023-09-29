const mongoose = require("mongoose");
require("dotenv").config();

const { CONNECTION_PORT, DATABASE_NAME } = process.env;
console.log(CONNECTION_PORT + DATABASE_NAME);
const dbConnection = async () => {
  try {
    const mongooseOptions = {
    
    };
    await mongoose.connect(`${CONNECTION_PORT}${DATABASE_NAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected successfully to mongodb")
  } catch (error) {
    //db.on("error", console.error.bind(console, "Connection error"));
    console.log(error);
  }
};

module.exports = dbConnection;

