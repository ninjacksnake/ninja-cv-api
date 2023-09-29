const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("../config");

const hashPass = (password) => {
  return bcrypt.hashSync(password, 10);
};

const validatePassword = (password, hashedPassword) => {
    console.log(password, hashedPassword);
  return bcrypt.compareSync(password, hashedPassword);
};

const authenticate = (user, password) => {
   const isPasswordValid = validatePassword(password, user.password);
   if (!isPasswordValid) {
    throw new Error("Incorrect username or password");
  }

  const token = jwt.sign(user.toJSON(), config.jwtSecret, { expiresIn: "1h" });
  return token; // generate token with user and set expiration time to one hour
};

module.exports ={
    hashPass,
    validatePassword,
    authenticate,
}
// after the autentication process is complete you should generate a new token to send it to the front
