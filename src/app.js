require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const router = require('./routes/index');

const app = express();

const baseUrl = process.env.BASE_URL || 'http://localhost:3030';

const corsOptions = {
  origin: process.env.ALLOWED_ORIGINS?.split(',') || [baseUrl],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  credentials: true,
};

const swaggerOption = {
  definition: {
    openapi: '3.1.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'API Documentation',
    },
    servers: [
      {
        url: baseUrl,
      },
    ],
  },
  apis: ['./src/routes/swagger/*.js'],
};

const swaggerSpec = swaggerJsDoc(swaggerOption);
app.use(
  '/api-docs',
  swaggerUi.serveFiles(swaggerSpec),
  swaggerUi.setup(swaggerSpec),
);

app.use(morgan('dev'));
app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', router);

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Express API Boilerplate',
    version: '1.0.0',
  });
});

module.exports = app;
