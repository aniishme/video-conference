import { JwtPayload } from "jsonwebtoken";

export type GetUserType = {
  id: number;
  name: string;
  email: string;
  password: string;
  created_at: string;
  updated_at: string;
};

export type CreateUserType = Omit<
  GetUserType,
  "id" | "created_at" | "updated_at"
>;

export type UpdateUserType = Partial<CreateUserType>;

export type GetEventType = {
  id: number;
  title: string;
  description: string;
  date: string;
  userId: string;
  created_at: string;
  updated_at: string;
};

export type CreateEventType = Omit<
  GetEventType,
  "id" | "created_at" | "updated_at"
>;

export type UpdateEventType = Partial<CreateEventType>;

export type BasePayloadType = {
  id: string;
};

export type JwtPayloadType = BasePayloadType & JwtPayload;
