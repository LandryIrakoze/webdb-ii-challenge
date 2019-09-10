const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

const carsRouter = require('../routes/cars/carsRouter');

const server = express();

server.use(helmet());
server.use(cors());
server.use(morgan());
server.use(express.json());

server.use('/api/cars', carsRouter);

module.exports = server;