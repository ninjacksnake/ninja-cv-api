const { Job } = require("../db/models/index");

module.exports.create = async function (req, res, next) {
  try {
    const data = req.body;
    const newJob = new Job({
      company: data.company,
      startDate: data.startDate,
      endDate: data.endDate,
      title: data.title,
      responsibilities: data.responsibilities,
      projectDescription: data.projectDescription,
      technologies: data.technologies,
      technicalChallenge: data.technicalChallenge,
      personalChallenge: data.personalChallenge,
      jobUrl: data.jobUrl,
      profileId: data.profileId,
    });
    await newJob.save();
    return res.status(201).json(newJob);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Failed to create job." });
  }
};

module.exports.remove = async function (req, res, next) {
  try {
    const jobId = req.params.jobId;
    console.log('job controller remove method jobId =',jobId);
    const job = await Job.findById(jobId);
    if (!Job) {
      return res.status(500).json({ error: "Job not found." });
    }
    await Job.findOneAndDelete({ _id: jobId});
    res.status(200).send({ message: "Job deleted successfully." });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Failed to update job." });
  }
};

module.exports.update = async function (req, res, next) {
  try {
    const data = req.body;
    const jobId = req.params.id;
    const job = await Job.findById(jobId);
    if (!Job) {
      return res.status(500).json({ error: "Job not found." });
    }
    await job.updateJob(data);
    res.status(200).json(job);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Failed to update job." });
  }
};

module.exports.find = async function (req, res, next) {
  try {
    let job;
    const profileId = req.params.profileId;
   // console.log("from controller", profileId);
    if (profileId) {
      job = await Job.find({ profileId: profileId });
      if (job.length === 0) {
        return res.status(205).json({ message: "Jobs records not found" });
      }
      console.log(job);
      return res.status(200).json(job);
    } else {
      return res.status(500).json({ error: "Failed to find a job." });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Failed to find a job." });
  }
};