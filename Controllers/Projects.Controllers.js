const { projectsCollection } = require("../Utilities/CollectionConnect");

module.exports.getPorjects= async (req, res, next)=>{
    const query = {};
    const cursor = projectsCollection.find(query);
    const projects = await cursor.toArray()
    res.send(projects);
}