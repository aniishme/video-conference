import jwt from "jsonwebtoken";
import { JwtPayloadType } from "../types";

export const jwtSecret = "secret";

export const generateToken = (payload: { id: string }) => {
  return jwt.sign(payload, jwtSecret, { expiresIn: "1h" });
};

export const verifyToken = (token: string): JwtPayloadType => {
  return jwt.verify(token, jwtSecret) as { id: string };
};
