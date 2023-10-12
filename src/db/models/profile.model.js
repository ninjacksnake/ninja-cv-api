const mongoose = require("mongoose");
const Skill = require("./skill.model");
const { Schema } = mongoose;


const profileSchema = new Schema({
  userId:String, 
  profileId:String,
  name: String,
  lastName: String,
  country: String,
  city: String,
  contact: String,
  aboutMe: String,
  photo: String,
  weakPoints: String,
  strongPoints: String,
  aspirations: String,
  lifeStyle: String,
  portafolio: String,
  socialNework: String,
  skills : Array,
});

const Profile = mongoose.model("Profile", profileSchema);
// try {
//   const newUser = new User({
//     name: "test",
//     email: "test@example.com",
//   });
//   await newUser.save();
// } catch (error) {
//   console.log(error);
// }
module.exports = Profile;
