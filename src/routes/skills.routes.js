const { Router } = require("express");
const skillRouter = Router();
const authMiddleware = require("../middlewares/authMiddleware");

const skillsController = require("../controllers/skills.controller");

// routes for skills
skillRouter.get("/api/skills/:id", authMiddleware, skillsController.find);
skillRouter.get("/api/skills", authMiddleware, skillsController.find);
skillRouter.post("/api/skills", authMiddleware, skillsController.create);
skillRouter.put("/api/skills", authMiddleware, skillsController.update);
skillRouter.delete("/api/skills/:id", authMiddleware, skillsController.remove);


//test route
skillRouter.get("/api", (req, res) => {
  console.log("yes");
  res.send("Api Safe and Sound");
});

module.exports = skillRouter;
