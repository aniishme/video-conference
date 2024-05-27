import { UserController } from "../controllers/user.controller";

import { Router } from "express";
import isAuth from "../middleware/authorization.middleware";

const userRouter = Router();

const userController = new UserController();

userRouter.post("/register", userController.register.bind(userController));
userRouter.post("/login", userController.login.bind(userController));
userRouter.get(
  "/profile",
  isAuth,
  userController.getProfile.bind(userController)
);

export default userRouter;
