const express = require('express');
const { getPorjects, postProject } = require('../../Controllers/Projects.Controllers');
const projectsRouter = express.Router();

projectsRouter
    .route('/')
    .get(getPorjects)

projectsRouter
    .route('/')
    .post(postProject)

module.exports = projectsRouter;