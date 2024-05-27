import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt";
import { AuthRequestType } from "../types";

const isAuth = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  try {
    const data = verifyToken(token);
    (req as AuthRequestType).userId = data.id; // Ensure 'id' exists in the token payload type
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

export default isAuth;
