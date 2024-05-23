import { eq } from "drizzle-orm";
import { db } from "../db/db";

import { usersTable } from "../db/schema";
import { CreateUserType, UpdateUserType } from "../types";

export class UserService {
  async create(user: CreateUserType) {
    return db.insert(usersTable).values(user);
  }

  async getByEmail(email: string) {
    return db.select().from(usersTable).where(eq(usersTable.email, email));
  }

  async getById(id: string) {
    return db.select().from(usersTable).where(eq(usersTable.id, id));
  }

  async update(id: string, user: UpdateUserType) {
    return db.update(usersTable).set(user).where(eq(usersTable.id, id));
  }
}
