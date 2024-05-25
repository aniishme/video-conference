import { api } from "@/lib/api";

export interface CreteEventType {
  title: string;
  date: string;
  description: string;
  userId: string;
}

export const createEvent = async (event: CreteEventType) => {
  return await api.post("/event", event);
};
