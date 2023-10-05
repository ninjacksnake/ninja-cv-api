const swaggerJSDoc = require("swagger-jsdoc");

// the definition of the swagger document its like the init
const swaggerDefinition = {
  info: {
    title: "ninja-cv-api",
    version: "1.0.0",
    description: "NINJA cv api documentation",
  },
  basePath: "/api/",
};

// declare options to load swagger documentation and the route to map de routes details
const options = { swaggerDefinition, apis: ["./routes/swagger-def/*.js"] };

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
