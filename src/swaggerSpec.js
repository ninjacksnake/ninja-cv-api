const swaggerJSDoc = require("swagger-jsdoc");
const path = require("path");

// declare options to load swagger documentation and the route to map de routes details
const options = {
  definition: {
    swagger: "2.0",
    info: {
      title: "API REST",
      version: "1.0.0",
      description: "API REST for the project",
    },
    tags: [
      {
        name: "Users",
        description: "User API",
      },
      {
        name: "Skills",
        description: "Skills API",
      },
    ],
    securityDefinitions: {
      jwt_auth: {
        type: 'apiKey',
        name: 'Authorization',
        in: 'header',
        description: 'JWT token for authentication',
      },
    },
    
    servers: [{ url: "http://localhost:3001" }],
  },
  apis: [path.resolve(__dirname, "./routes/*.js")],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
