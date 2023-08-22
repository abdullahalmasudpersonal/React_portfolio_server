const express = require('express');
const { getPorjects } = require('../../Controllers/Projects.Controllers');
const projectsRouter = express.Router();

projectsRouter
    .route('/')
    .get(getPorjects)

module.exports = projectsRouter;