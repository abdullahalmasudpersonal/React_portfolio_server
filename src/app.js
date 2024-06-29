import express from "express";
import notFound from "./app/middlewares/notFound";
import router from "./app/routes";
import cors from "cors";
import config from "./app/config";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

// application routes
//app.use("/api", router);

app.get("/", (req, res) => {
  res.send(`React portfolio app listening on port `);
});

//Not Found
//app.use(notFound);

export default app;
