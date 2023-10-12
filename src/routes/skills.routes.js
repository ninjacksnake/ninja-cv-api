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

/**
 * @swagger
 *  paths:
 *  /api/skills:
 *   get:
 *     summary: Get a list of skills
 *     description: Returns a list of all skills.
 *     security:
 *       - jwt_auth: []
 *     tags: [Skills]
 *     responses:
 *       200:
 *         description: A list of skills.
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
 *  /api/skills/{skillName}:
 *   get:
 *     summary: Get a skill by id
 *     description: Returns a skill by id.
 *     security:
 *       - jwt_auth: []
 *     parameters:
 *       - in: path
 *         name: skillName
 *         schema:
 *           type: integer
 *         required: true
 *         description: The skill id
 *     tags: [Skills]
 *     responses:
 *       200:
 *         description: A skill.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                   description: The skill name
 *
 *   post:
 *     summary: Create a skill
 *     description: Creates a skill.
 *     security:
 *       - jwt_auth: []
 *     tags: [Skills]
 *    
 *     responses:
 *       201:
 *         description: The skill was successfully created.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:  
 *                   type: integer
 *                   description: The skill id
 *                 name:
 *                   type: string
 *                   description: The skill name
 *                 description:
 *                   type: string
 *                   description: The skill description
 *   put:
 *     summary: Update a skill
 *     description: Updates a skill.
 *     security:
 *       - jwt_auth: []
 *     tags: [Skills]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 description: The skill id
 *               name:
 *                 type: string
 *                 description: The skill name
 *               description:
 *                 type: string
 *                 description: The skill description
 *     responses:
 *       200:
 *         description: The skill was successfully updated.
 *         content:
 *           application/json:  
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The skill id
 *                 name:
 *                   type: string
 *                   description: The skill name
 *                 description:
 *                   type: string
 *                   description: The skill description
 *    
 *   delete:
 *     summary: Delete a skill
 *     description: Deletes a skill.
 *     security:
 *       - jwt_auth: []
 *     parameters:	
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The skill id
 *     tags: [Skills]
 *     responses:
 *       200:
 *         description: The skill was successfully deleted.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The skill id
 *                 
 *  
 *  
 *  
 *
 *
 */

module.exports = skillRouter;
