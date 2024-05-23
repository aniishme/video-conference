import { UserController } from "../controllers/user.controller";

import { Router } from "express";

const userRouter = Router();

const userController = new UserController();

userRouter.post("/register", userController.register.bind(userController));
userRouter.post("/login", userController.login.bind(userController));
userRouter.get("/profile", userController.getProfile.bind(userController));

export default userRouter;
