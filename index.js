const express = require('express')
const app = express();
const cors = require('cors');
require('dotenv').config();
const mongodb = require('mongodb');
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster01.hilfpz8.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect();
        const blogsCollection = client.db('React_portfolio').collection('blogs');
        
            /* get Products api */
            app.get('/blogs', async (req, res) => {
                const query = {};
                const cursor = blogsCollection.find(query);
                const blogs = await cursor.toArray();
                res.send(blogs);
            });

    }
    finally {

    }

}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Hello Abdullah portfolio!')
})

app.listen(port, () => {
    console.log(`React portfolio app listening on port http://localhost:${port}`)
})