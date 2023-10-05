const { Profile } = require("../db/models/index");

module.exports.create = async function (req, res, next) {
  try {
    const data = req.body;
    const newProfile = new Profile({
      name: data.Profilename,
      email: data.email,
      password: data.password,
      enabled: true,
    });
    await newProfile.save();
    return res.status(201).json(newProfile);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Failed to create profile." });
  }
};

module.exports.update = async function (req, res, next) {
  console.log("update");
  try {
    const data = req.body;
    const profileId = req.params.id;
    const profile = await Profile.findOne({ userId: profileId });
    if (!Profile) {
      return res.status(500).json({ error: "Profile not found." });
    }
    console.log(data);
    await profile.updateOne(data);
    res.status(200).json(profile);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Failed to update profile." });
  }
};

module.exports.updateSkills = async function (req, res, next) {
  console.log("update");
  try {
    const data = req.body;
    const profileId = req.params.id;
    const profile = await Profile.findOne({ userId: profileId });
    if (!profile) {
      return res.status(500).json({ error: "Profile not found." });
    }
    await Profile.updateOne({profileId: profileId},{
      $set: { 'skills': data.skills }
    });
    res.status(200).json(profile);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Failed to update profile." });
  }
};

const profileIdExist = (req) => {
  const profileId = req.params.id;
 // console.log("🚀 ~ file: profile.controller.js:42 ~ profileId:", profileId);
  if (profileId) {
    return profileId;
  }
  return false;
};



module.exports.find = async function (req, res, next) {
  console.log("profile find",req.params);
  try {
    let profile;
    const profileId = profileIdExist(req);
    if (profileId) {
      profile = await Profile.findOne({ userId: profileId });
    } else {
      profile = await Profile.find();
    }
    // generate not found error 
    if (profile.length === 0 || profile === null) {
      throw new Error("not found", {cause:"not found"});
    }
  //  console.log(profile)
    return res.status(200).json({profile})
  } catch (error) {
    if (error.message === "not found") {
      return res.status(200).send(profile);
    }
    else{
      console.log(error)
      return res.status(500).json({ error: "Failed to find a profile." });
    }
  }
};
