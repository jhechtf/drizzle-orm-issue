import { pgTable, uuid, varchar, date, unique } from "drizzle-orm/pg-core";

export const users = pgTable(
  "users",
  {
    id: uuid("id").notNull().primaryKey().defaultRandom(),
    email: varchar("email", { length: 200 }).notNull(),
  },
  ({ email }) => ({
    emailIdx: unique("unique_email_idx").on(email),
  })
);
