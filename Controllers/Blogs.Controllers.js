const { blogsCollection } = require("../Utilities/CollectionConnect");

module.exports.getBlogs = async (req, res, next) => {
    const query = {};
    const cursor = blogsCollection.find(query);
    const blogs = await cursor.toArray();
    res.send(blogs);
}