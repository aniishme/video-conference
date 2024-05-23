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

export class UserController {
  private userService = new UserService();

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
      return res.status(200).json({ accessToken: token });
    } catch (error) {
      next(error);
    }
  }

  async getProfile(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(" ")[1];
    try {
      const payload = verifyToken(token!);
      const user = await this.userService.getById(payload?.id);
      return res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }
}
