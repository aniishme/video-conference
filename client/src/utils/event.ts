import { api } from "@/lib/api";
import { GetEventType } from "@/types";

export interface CreteEventType {
  title: string;
  date: string;
  description: string;
  userId: string;
}

export const createEvent = async (event: CreteEventType) => {
  return await api.post("/event", event);
};

export const getEvents = async (userId: string): Promise<GetEventType[]> => {
  const response = await api.get(`/event/user/${userId}`);
  return response.data;
};
