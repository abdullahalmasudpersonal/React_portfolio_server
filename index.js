const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const mongodb = require('mongodb');
const projectsRouter = require('./Routes/V1/ProjectsRoutes');
const blogsRouter = require('./Routes/V1/Blogs.Routes');
const ErrorHandler = require('./middleware/ErrorHandle');
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

require('./Utilities/DBConnect');

app.use('/api/v1/blogs', blogsRouter);
app.use('/api/v1/projects', projectsRouter);

app.get('/', (req, res) => {
    res.send('Hello Abdullah portfolio!')
});

app.all('*', (req, res) =>{
    res.send("No route found.");
});

app.use(ErrorHandler);

app.listen(port, () => {
    console.log(`React portfolio app listening on port http://localhost:${port}`)
});

process.on("unhandledRejection", (error) => {
    console.log(error.name, error.message);
    app.close(() => {
        process.exit(1);
    });
}); 

