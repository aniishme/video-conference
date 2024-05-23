import { randomUUID } from "crypto";
import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const usersTable = sqliteTable("users", {
  id: text("id", { length: 36 })
    .primaryKey()
    .$defaultFn(() => randomUUID()),
  name: text("name").notNull(),
  email: text("email").unique().notNull(),
  password: text("password").notNull(),
  created_at: text("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updated_at: integer("updated_at", { mode: "timestamp" }).$onUpdate(
    () => new Date()
  ),
});

export const eventsTable = sqliteTable("events", {
  id: text("id", { length: 36 })
    .primaryKey()
    .$defaultFn(() => randomUUID()),
  title: text("title").notNull(),
  description: text("description").notNull(),
  date: text("date").notNull(),
  created_at: text("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updated_at: integer("updated_at", { mode: "timestamp" }).$onUpdate(
    () => new Date()
  ),
});
