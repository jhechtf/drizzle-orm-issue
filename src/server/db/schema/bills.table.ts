import { relations } from 'drizzle-orm';
import { pgTable, uuid, varchar, index, smallint } from 'drizzle-orm/pg-core';
import { households } from './households.table';

export const bills = pgTable('bills', {
  id: uuid('id').notNull().primaryKey().defaultRandom(),
  name: varchar('name').notNull(),
  dueDate: smallint('due_date').notNull(),
  householdId: uuid('household_id').notNull().references(() => households.id),
}, ({ householdId, dueDate }) => ({
  householdIndex: index('household_id_idx').on(householdId),
  dueDateIndex: index('due_date_idx').on(dueDate),
}));

export const billsToHousehold = relations(bills, ({ one }) => ({
  household: one(households, { 
    fields: [bills.householdId],
    references: [households.id]
  }),
}));

