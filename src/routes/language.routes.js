const { Router } = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const languageController = require("../controllers/language.controller");



// routes for languages
const languageRouter = Router();
languageRouter.get("/api/language/:id", authMiddleware, languageController.find);
languageRouter.get("/api/language", authMiddleware, languageController.find);
languageRouter.post("/api/language", authMiddleware, languageController.create);
languageRouter.put("/api/language", authMiddleware, languageController.update);


module.exports = languageRouter;