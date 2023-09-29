const { User, Job, Profile, Education, Project } = require("../db/models/index");
const { v4 } = require("uuid");
const authenticate = require("../utils/authentication");

module.exports.create = async function (req, res, next) {
  try {
    const userId = v4();
    const data = req.body;
    const hashedPassword = authenticate.hashPass(data.password);
    const newUser = new User({
      username: data.username,
      email: data.email,
      password: hashedPassword,
      enabled: true,
      userId: userId,
      role: "user",
    });
    const newUserProfile = new Profile({
      userId: userId,
    });
    const newEducation = new Education({
      userId: userId,
    })
    const newJob = new Job({
      userId: userId,
    });
    const newProject = new Project({
      userId: userId,
    });
    await newUser.save();
    await newUserProfile.save();
    await newEducation.save();
    await newJob.save();
    await newProject.save();
    
    

    return res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Failed to create user." });
  }
};

module.exports.update = async function (req, res, next) {
  try {
    const data = req.body;
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (!user || user.length === 0) {
      return res.status(500).json({ error: "User not found." });
    }
    if (data.password) {
      data.password = authenticate.hashPass(data.password);
    }
    user.username = data.username ? data.username : user.username;
    user.email = data.email ? data.email : user.email;
    user.password = data.password ? data.password : user.password;
    user.save();
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Failed to update user." });
  }
};

module.exports.find = async function (req, res, next) {
  try {
    let user;
    const userId = req.params.id;
    if (userId) {
      user = await User.findById(userId, { password: 0 });
      console.log(user);
      return res.status(200).json(user);
    }
    user = await User.find({}, { password: 0 });
    if (user.length === 0) {
      return res.status(500).json({ message: "User not found" });
    }
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Failed to find an user." });
  }
};
