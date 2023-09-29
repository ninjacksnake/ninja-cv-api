const express = require("express");
const router =require("./routes/routes.js");
const app = express();
const cors = require('cors');
require("dotenv").config();
const APP_PORT =process.env.APP_PORT
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(APP_PORT, console.log(`Server is online on port ${APP_PORT}`));



