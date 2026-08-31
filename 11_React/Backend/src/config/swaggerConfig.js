const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "User Management API",
      version: "1.0.0",
      description:
        "REST API for managing users — supports create, read, update, and delete operations with profile image upload.",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Local development server",
      },
    ],
    components: {
      schemas: {
        User: {
          type: "object",
          properties: {
            _id: {
              type: "string",
              example: "64f1a2b3c4d5e6f7a8b9c0d1",
            },
            name: {
              type: "string",
              example: "Alice Johnson",
            },
            email: {
              type: "string",
              format: "email",
              example: "alice@example.com",
            },
            gender: {
              type: "string",
              enum: ["male", "female", "other"],
              example: "female",
            },
            profileImageUrl: {
              type: "string",
              nullable: true,
              example: "http://localhost:3000/uploads/profile-123456789.jpg",
            },
            createdAt: {
              type: "string",
              format: "date-time",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
            },
          },
        },
        UserInput: {
          type: "object",
          required: ["name", "email", "password", "gender"],
          properties: {
            name: {
              type: "string",
              example: "Alice Johnson",
            },
            email: {
              type: "string",
              format: "email",
              example: "alice@example.com",
            },
            password: {
              type: "string",
              format: "password",
              minLength: 6,
              example: "secret123",
            },
            gender: {
              type: "string",
              enum: ["male", "female", "other"],
              example: "female",
            },
            profileImageUrl: {
              type: "string",
              nullable: true,
              example: "https://example.com/avatar.jpg",
            },
          },
        },
        ErrorResponse: {
          type: "object",
          properties: {
            success: {
              type: "boolean",
              example: false,
            },
            message: {
              type: "string",
              example: "User not found",
            },
          },
        },
        SuccessResponse: {
          type: "object",
          properties: {
            success: {
              type: "boolean",
              example: true,
            },
            data: {
              $ref: "#/components/schemas/User",
            },
          },
        },
      },
    },
  },
  // Path to files containing JSDoc annotations
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
