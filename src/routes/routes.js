const { Router } = require("express");
const userController = require("../controllers/user.controller");
const educationController = require("../controllers/education.controller");
const profileController = require("../controllers/profile.controller");
const jobController = require("../controllers/job.controller");
const languageController = require("../controllers/language.controller");
const projectController = require("../controllers/project.controller");
const loginController = require("../controllers/login.controller");
const authMiddleware = require("../middlewares/authMiddleware");

const router = Router();

// routes for users
router.get("/api/user/:id", authMiddleware, userController.find);
router.get("/api/user", authMiddleware, userController.find);
router.post("/api/user", authMiddleware, userController.create);
router.put("/api/user/:id", authMiddleware, userController.update);
//logIn Routes
router.post("/api/login", loginController.login);
//router.get("/logout", loginController.logout);
router.post("/api/register", loginController.register);

//routes for education
router.get("/api/education/:id", authMiddleware, educationController.find);
router.get("/api/education", authMiddleware, educationController.find);
router.post("/api/education", authMiddleware, educationController.create);
router.put("/api/education/:id", authMiddleware, educationController.create);
router.put("/api/education", authMiddleware, educationController.update);
router.delete("/api/education/:id", authMiddleware, educationController.delete);

//routes for job
router.get("/api/job/:profileId", authMiddleware, jobController.find);
router.get("/api/job", authMiddleware, jobController.find);
router.post("/api/job", authMiddleware, jobController.create);
router.put("/api/job", authMiddleware, jobController.update);
router.delete("/api/job/:jobId", authMiddleware, jobController.remove);

// routes for languages
router.get("/api/language/:id", authMiddleware, languageController.find);
router.get("/api/language", authMiddleware, languageController.find);
router.post("/api/language", authMiddleware, languageController.create);
router.put("/api/language", authMiddleware, languageController.update);

// routes for profile
router.get("/api/profile/:id", profileController.find);
router.get("/api/profile", authMiddleware, profileController.find);
router.post("/api/profile", authMiddleware, profileController.create);
router.put("/api/profile/:id", authMiddleware, profileController.update);

//route for project
router.get("/api/project/:profileId", authMiddleware, projectController.find);
router.post("/api/project", authMiddleware, projectController.create);                             
router.delete("/api/project/:projectId", authMiddleware, projectController.remove);
router.put("/api/project/:projectId", authMiddleware, projectController.update);


//test route
router.get("/api", (req, res)=>{
    console.log("yes")
    res.send("Api Safe and Sound")
});

module.exports = router;
