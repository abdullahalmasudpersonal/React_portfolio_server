/* import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";

async function main() {
  try {
    await mongoose.connect(
      `mongodb+srv://React_portfolio:PzR0jMX3jpX3yQAx@cluster01.hilfpz8.mongodb.net/?retryWrites=true&w=majority`
    );

    app.listen(5000, () => {
      console.log(`Example app listening on port `);
    });
  } catch (err) {
    console.log(err);
  }
}
main(); */

import express from "express";
const app = express();
import cors from "cors";
import ErrorHandler from "../middleware/ErrorHandle";
import config from "./app/config";
//require("dotenv").config();
//const mongodb = require("mongodb");
//const ErrorHandler = require("../middleware/ErrorHandle");
//const { default: config } = require("./app/config");
//const projectsRouter = require("./Routes/V1/ProjectsRoutes");
//const blogsRouter = require("./Routes/V1/Blogs.Routes");
//const ErrorHandler = require("./middleware/ErrorHandle");
//const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//require("./Utilities/DBConnect");
require("../Utilities/DBConnect");

//app.use("/api/v1/blogs", blogsRouter);
//app.use("/api/v1/projects", projectsRouter);

app.get("/", (req, res) => {
  res.send("Hello Abdullah portfolio!");
});

app.all("*", (req, res) => {
  res.send("No route found.");
});

app.listen(config.port, () => {
  console.log(
    `React portfolio app listening on port http://localhost:${config.port}`
  );
});

app.use(ErrorHandler);

process.on("unhandledRejection", (error) => {
  console.log(error.name, error.message);
  app.close(() => {
    process.exit(1);
  });
});
