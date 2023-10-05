const { Router } = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const jobController = require("../controllers/job.controller");

//routes for job
const jobRouter = Router();
jobRouter.get("/api/job/:profileId", authMiddleware, jobController.find);
jobRouter.get("/api/job", authMiddleware, jobController.find);
jobRouter.post("/api/job", authMiddleware, jobController.create);
jobRouter.put("/api/job", authMiddleware, jobController.update);
jobRouter.delete("/api/job/:jobId", authMiddleware, jobController.remove);


module.exports = jobRouter;