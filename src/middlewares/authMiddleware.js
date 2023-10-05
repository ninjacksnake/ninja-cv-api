const jwt = require("jsonwebtoken");
const config = require("../config");
const roles = require("../utils/roles");

const authorization = (req, user) => {
  try {
    const path = req.url.slice(1).trim().split("/")[1]; // take the url trim and split by / then take the second value
    const granted = roles[`${user.role}`].routes[path].includes(req.method);
    return granted;
  } catch (error) {
    return false;
  }
};

const authMiddleware = (req, res, next) => {
  console.log("auth in action");
  console.log(req.header('authorization'))
  try {
    // Get the token from the request header
    const token = req
      .header("Authorization")
      .replace("Bearer ", "")
      .replace(/"/g, "");
    if (!token || token === undefined) {
      console.log("no token found");
      return res.status(401).json({ error: "No token found" });
    }
    // Verify the token
    const decoded = jwt.verify(token, config.jwtSecret);
    req.user = decoded; // Set the decoded payload on the request object
    const isAuthorized = authorization(req, decoded);
    console.log(isAuthorized ? "Authorized" : "Unauthorized");
    // Call the next middleware or route handler
    next();
  } catch (error) {
    console.log(error);
    if (error.message === "Unauthorized") {
      res.status(401).json({ error: "Unauthorized" });
    } else if (error.message === "jwt expired") {
      console.log("jwt expired");
      res.status(401).json({ error: "token expired" });
    } else {
      console.log(error.message);
      res.status(401).json({ error: "Invalid token" });
    }
  }
};

module.exports = authMiddleware;
