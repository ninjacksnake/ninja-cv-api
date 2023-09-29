const mongoose = require('mongoose');

const { Schema } = mongoose;


const projectSchema = new Schema({
    name: String,
    description: String,
    startDate: String,
    endDate: String,
    technologies: String,
    url: String,
    profileId: String,
  });

  const Project = mongoose.model("Project", projectSchema);
 
  module.exports = Project;
