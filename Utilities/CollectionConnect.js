const client = require("./DBConnect");

const blogsCollection = client.db('React_portfolio').collection('blogs');
const projectsCollection = client.db('React_portfolio').collection('projects');

module.exports = {
    blogsCollection,
    projectsCollection
};