import { StreamClient } from "@stream-io/node-sdk";
import { NextFunction, Request, Response } from "express";
import { AuthRequestType } from "../types";
// or
// const { StreamClient } = require("@stream-io/node-sdk");

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_SECRET_KEY;

export const tokenProvider = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req as AuthRequestType;

    if (!userId) {
      return res.status(401).json({ message: "User is not logged in" });
    }
    if (!apiKey) throw new Error("Stream API Key Missing");
    if (!apiSecret) throw new Error("Stream API Secret is missing");

    const client = new StreamClient(apiKey, apiSecret);

    const exp = Math.round(new Date().getTime() / 1000) + 60 * 60;
    const issued = Math.floor(Date.now() / 1000) - 60;

    const token = client.createToken(userId, exp, issued);

    return res.status(200).json({ token: token });
  } catch (error) {
    next(error);
  }
};

