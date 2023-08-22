const { getBlogs } = require("../../Controllers/Blogs.Controllers");
const express = require('express');
const blogsRouter = express.Router();

blogsRouter
    .route('/')
    .get(getBlogs)

module.exports = blogsRouter;

