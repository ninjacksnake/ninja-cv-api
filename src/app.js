const express = require("express");
const skillRouter =require("./routes/skills.routes.js");
const userRouter =require("./routes/user.js");
const profileRouter =require("./routes/profile.routes.js");
const languageRouter =require("./routes/language.routes.js");
const jobRouter = require("./routes/job.routes.js");
const projectRouter = require("./routes/project.routes.js");
const educationRouter = require("./routes/education.routes.js");
const YAML = require('yamljs');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const swaggerSpec = require('./swaggerSpec');

// const swaggerSpec = YAML.load(path.resolve(__dirname, "./routes/swagger-def/swagger.yaml"));
const app = express();
const cors = require('cors');

require("dotenv").config();
const APP_PORT =process.env.APP_PORT


app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(skillRouter);
app.use(profileRouter);
app.use(languageRouter);
app.use(jobRouter);
app.use(projectRouter);
app.use(educationRouter);



app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));    

app.listen(APP_PORT, console.log(`Server is online on port ${APP_PORT}`));



