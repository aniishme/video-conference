import { NextFunction, Request, Response } from "express";

/* 
Services 
*/
import { UserService } from "../services/user.service";

/* 
Utility Functions 
*/
import { comparePassword, hashPassword } from "../utils/password";
import { generateToken, verifyToken } from "../utils/jwt";
import { AuthRequestType } from "../types";

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async register(req: Request, res: Response, next: NextFunction) {
    const user = req.body;
    try {
      const userExists = await this.userService.getByEmail(user.email);
      if (userExists.length > 0) {
        return res.status(400).json({ message: "User already exists" });
      }
      user.password = await hashPassword(user.password);
      const result = await this.userService.create(user);
      return res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;
    try {
      const user = await this.userService.getByEmail(email);
      if (user.length === 0) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
      const isMatch = await comparePassword(password, user[0].password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
      const token = generateToken({ id: user[0].id });

      const ONE_WEEK_IN_MS = 604800000;

      res.cookie("ACCESS_TOKEN", token, {
        httpOnly: true,
        path: "/",
        maxAge: ONE_WEEK_IN_MS,
        sameSite: "none",
        secure: true,
      });
      return res.status(200).json({ token: token });
    } catch (error) {
      next(error);
    }
  }

  async getProfile(req: Request, res: Response, next: NextFunction) {
    const { userId } = req as AuthRequestType;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    try {
      const user = await this.userService.getById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }
}
