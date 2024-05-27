import { api } from "@/lib/api";

export interface CreateUserType {
  email: string;
  name: string;
  password: string;
}

export type GetUserType = {
  id: number;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
};

export const createUser = async (user: CreateUserType) => {
  return await api.post("/user/register", user);
};

export const loginUser = async (email: string, password: string) => {
  const response = await api.post(
    "/user/login",
    { email, password },
    {
      withCredentials: true,
    }
  );
  return response;
};

export const getProfile = async (): Promise<GetUserType> => {
  const response = await api.get("/user/profile");
  return await response.data;
};