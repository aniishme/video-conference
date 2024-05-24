import { eq } from "drizzle-orm";
import { db } from "../db/db";
import { eventsTable } from "../db/schema";

import { CreateEventType, UpdateEventType } from "../types";

export class EventService {
  constructor() {}

  async create(event: CreateEventType) {
    return db.insert(eventsTable).values(event);
  }

  async getById(id: string) {
    return db.select().from(eventsTable).where(eq(eventsTable.id, id));
  }

  async update(id: string, event: UpdateEventType) {
    return db.update(eventsTable).set(event).where(eq(eventsTable.id, id));
  }

  async delete(id: string) {
    return db.delete(eventsTable).where(eq(eventsTable.id, id));
  }

  async getByUserId(userId: string) {
    return db.select().from(eventsTable).where(eq(eventsTable.userId, userId));
  }
}
