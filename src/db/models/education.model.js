const mongoose = require("mongoose");
const { Schema } = mongoose;

const educationSchema = new Schema({
  educationType: String,
  startDate: String,
  endDate: String,
  institutionName: String,
  institutionUrl: String,
  status: String,
  city: String,
  country: String,
  profileId: String,
});

const Education = mongoose.model("Education", educationSchema);


module.exports = Education;
