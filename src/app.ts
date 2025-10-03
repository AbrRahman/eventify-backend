import express, { RequestHandler } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// import fetch from "node-fetch";
const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.get("/", (req, res, next) => {
  res.send("Hello world");
});

export default app;
