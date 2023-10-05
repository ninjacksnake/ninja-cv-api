const { Router } = require("express");
const profileRouter = Router();
const profileController = require("../controllers/profile.controller");
const authMiddleware = require("../middlewares/authMiddleware");

// routes for profile
profileRouter.get("/api/profile/:id", profileController.find);
profileRouter.get("/api/profile", authMiddleware, profileController.find);
profileRouter.post("/api/profile", authMiddleware, profileController.create);
profileRouter.put("/api/profile/:id", authMiddleware, profileController.update);
profileRouter.get("/api/profile/skills/:id", authMiddleware, profileController.find);
profileRouter.patch("/api/profile/skills/:id", authMiddleware, profileController.updateSkills);

module.exports = profileRouter;