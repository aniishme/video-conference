import jwt from "jsonwebtoken";

export const jwtSecret = "secret";

export const generateToken = (payload: any) => {
  return jwt.sign(payload, jwtSecret, { expiresIn: "1h" });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, jwtSecret);
};
