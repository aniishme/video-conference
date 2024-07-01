// src/index.ts
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors, { CorsOptions } from "cors";
//Routes
import userRouter from "./routes/user.route";
import eventRouter from "./routes/event.route";
import streamRouter from "./routes/stream.route";

//Middlewares
import errorHandler from "./middleware/error.middleware";


const app = express();
const port = 3000;

const whitelist = [`${process.env.CLIENT_URL}`, 'http://172.24.112.1:5173','http://192.168.56.1:5173','http://192.168.18.79:5173','http://localhost:4173', 'http://172.24.112.1:4173','http://192.168.56.1:4173','http://192.168.18.79:4173'];

// CORS options
const corsOptions:CorsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin || "") !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

// Enable CORS with options
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/user", userRouter);
app.use("/event", eventRouter);
app.use("/stream",streamRouter)

// Register the error handler middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
