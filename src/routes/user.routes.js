const { Router } = require("express");
const userController = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/authMiddleware");
const loginController = require("../controllers/login.controller");

const userRouter = Router();


// routes for users
userRouter.get("/api/user/:id", authMiddleware, userController.find);
userRouter.get("/api/user", authMiddleware, userController.find);
userRouter.post("/api/user", authMiddleware, userController.create);
userRouter.put("/api/user/:id", authMiddleware, userController.update);
//logIn Routes
userRouter.post("/api/login", loginController.login);
//router.get("/logout", loginController.logout);
userRouter.post("/api/register", loginController.register);


module.exports = userRouter;