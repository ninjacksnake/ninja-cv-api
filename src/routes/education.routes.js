const { Router } = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const educationController = require("../controllers/education.controller");

//routes for education
const educationRouter = Router();
educationRouter.get("/api/education/:id", authMiddleware, educationController.find);
educationRouter.get("/api/education", authMiddleware, educationController.find);
educationRouter.post("/api/education", authMiddleware, educationController.create);
educationRouter.put("/api/education/:id", authMiddleware, educationController.create);
educationRouter.put("/api/education", authMiddleware, educationController.update);
educationRouter.delete("/api/education/:id", authMiddleware, educationController.delete);


module.exports = educationRouter;