const mongoose = require("mongoose");

const { Schema } = mongoose;

const SkillSchema = new Schema({
  name: String,
  description: String,
  level: String,
});

const Skill = mongoose.model("Skill", SkillSchema);

module.exports = Skill;
