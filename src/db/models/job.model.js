const mongoose = require("mongoose");
const { Schema } = mongoose;

const jobSchema = new Schema({
  company: String,
title: String,
  startDate: String,
  endDate: String,
  responsibilities: String,
  projectDescription: String,
  technologies: String,
  technicalChallenge: String,
  personalChallenge: String,
  jobUrl: String,
  profileId: String,
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
