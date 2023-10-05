const { Router } = require("express");
const projectRouter = Router();

const authMiddleware = require("../middlewares/authMiddleware");
const projectController = require("../controllers/project.controller");

//route for project
projectRouter.get(
  "/api/project/:profileId",
  authMiddleware,
  projectController.find
);
projectRouter.post("/api/project", authMiddleware, projectController.create);
projectRouter.delete(
  "/api/project/:projectId",
  authMiddleware,
  projectController.remove
);
projectRouter.put(
  "/api/project/:projectId",
  authMiddleware,
  projectController.update
);

module.exports = projectRouter;;
