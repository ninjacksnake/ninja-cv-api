const { Project } = require("../db/models/index");

module.exports.create = async function (req, res, next) {
  try {
    const data = req.body;
    const newProject = new Project({
      name: data.name,
      description: data.description,
      startDate: data.startDate,
      endDate: data.endDate,
      techonologies: data.techonologies,
      url: data.url,
      profileId: data.profileId,
    });
    await newProject.save();
    return res.status(201).json(newProject);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Failed to create Project." });
  }
};

module.exports.update = async function (req, res, next) {
  try {
    const data = req.body;
    const projectId = req.params.id;
    const project = await Project.findById(projectId);
    if (!Project) {
      return res.status(500).json({ error: "Project not found." });
    }
    await project.updateProject(data);
    res.status(200).json(project);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Failed to update Project." });
  }
};

module.exports.find = async function (req, res, next) {
  try {
    let project;
    const profileId = req.params.profileId;
    console.log("🚀 ~ file: project.controller.js:41 ~ profileId:", profileId);
    if (profileId) {
      project = await Project.find({ profileId: profileId });
      if (project.length === 0) {
        return res.status(404).json({ message: "Project not found" });
      }
      return res.status(200).json(project);
    }
    return res.status(404).json({ message: "Project not found" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Unexpected error occured." });
  }
};

module.exports.remove = async function (req, res, next) {
  try {
    const projectId = req.params.projectId;
    console.log('project controller remove method projectId =', projectId);
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(500).json({ error: "Project not found." });
    }
    await Project.findOneAndDelete({ _id: projectId});
    res.status(200).send({ message: "Project deleted successfully." });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Failed to update project." });
  }
};