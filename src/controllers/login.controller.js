const { User, Profile } = require("../db/models/index");
const auth = require("../utils/authentication");
const {  v4 } = require("uuid");
const authenticate = require("../utils/authentication");


module.exports.register = async function (req, res, next) {
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
    await newUser.save();
    const newUserProfile = new Profile({
      userId: userId,
    });
     newUserProfile.save();
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
    if (!user) {
      return res.status(500).json({ error: "User not found." });
    }
    await user.updateUser(data);
    user.password = undefined;
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Failed to update user." });
  }
};

module.exports.login = async function (req, res, next) {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });
    if (!user || user.length === 0) {
      return res
        .status(500)
        .json({ message: "Incorrect username or password" });
    }
    const authToken = await auth.authenticate(user, password);
    if (!authToken) {
      return res
        .status(500)
        .json({ message: "Incorrect username or password" });
    }
    return res.status(200).json({authToken});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Incorrect username or password, if problem persist contact the admin." });
  }
};


module.exports.checkToken = (token = undefined)=>{
      if( token === undefined) {
        
      }
}
