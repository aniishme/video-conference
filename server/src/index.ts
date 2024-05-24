// src/index.ts
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
//Routes
import userRouter from "./routes/user.route";

//Middlewares
import errorHandler from "./middleware/error.middleware";
import eventRouter from "./routes/event.route";

const app = express();
const port = 3000;

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/user", userRouter);
app.use("/event", eventRouter);

// Register the error handler middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
