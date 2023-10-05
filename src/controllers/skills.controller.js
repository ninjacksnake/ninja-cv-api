const { Skill } = require("../db/models/index");

module.exports.create = async function (req, res, next) {
  try {
    const data = req.body;
    const newSkill = new Skill({
      name: data.name,
      level: data.level,
      description: data.description,
    });
    await newSkill.save();
    return res.status(201).json(newSkill);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Failed to create Skill." });
  }
};

module.exports.update = async function (req, res, next) {
  try {
    const data = req.body;
    const skillId = req.params.id;
    const skill = await Skill.findById(skillId);
    if (!Skill) {
      return res.status(500).json({ error: "Skill not found." });
    }
    await skill.updateSkill(data);
    res.status(200).json(skill);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Failed to update Skill." });
  }
};

module.exports.find = async function (req, res, next) {
  try {
    let skill;
    const profileId = req.params.profileId;
    if (profileId) {
      skill = await Skill.find({ _Id: id });
      if (skill.length === 0) {
        return res.status(404).json({ message: "Skill not found" });
      }
      return res.status(200).json(skill);
    }
    return res.status(404).json({ message: "Skill not found" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Unexpected error occured." });
  }
};

module.exports.remove = async function (req, res, next) {
  try {
    const skillId = req.params.skillId;
    console.log("skill controller remove method skillId =", skillId);
    const skill = await Skill.findById(skillId);
    if (!skill) {
      return res.status(500).json({ error: "Skill not found." });
    }
    await Skill.findOneAndDelete({ _id: skillId });
    res.status(200).send({ message: "Skill deleted successfully." });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Failed to update skill." });
  }
};
