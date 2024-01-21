import { pgTable, uuid, varchar, index } from "drizzle-orm/pg-core";
import { users } from "./users.table";

export const households = pgTable(
  "users",
  {
    id: uuid("id").notNull().primaryKey().defaultRandom(),
    name: varchar('name').notNull(),
    ownerId: uuid('owner_id').notNull().references(() => users.id),
  },
  ({ ownerId }) => ({
    ownerIdx: index("owner_idx").on(ownerId),
  })
);
