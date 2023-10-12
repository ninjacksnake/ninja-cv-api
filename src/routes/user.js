

const { Router } = require("express");
const userController = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/authMiddleware");
const loginController = require("../controllers/login.controller");
/**
 * @swagger
 * /api/user:
 *   get:
 *     summary: Get a list of users
 *     description: Returns a list of all users.
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 */
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
