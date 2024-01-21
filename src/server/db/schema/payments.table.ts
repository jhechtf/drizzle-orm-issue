import { relations } from 'drizzle-orm'
import { date, index, pgTable, uuid } from 'drizzle-orm/pg-core';
import { users } from './users.table';
import { bills } from './bills.table';
import { households } from './households.table';

export const payments = pgTable('payments', {
  id: uuid('id').notNull().primaryKey().defaultRandom(),
  paidBy: uuid('paid_by').references(() => users.id),
  forMonth: date('for_month').notNull(),
  billId: uuid('bill_id').notNull().references(() => bills.id),
  householdId: uuid('household_id').notNull().references(() => households.id),
}, ({ forMonth, paidBy, householdId, billId }) => ({
  monthIndex: index('for_month_idx').on(forMonth),
  paidByIndex: index('paid_by_idx').on(paidBy),
  billIndex: index('bill_idx').on(billId),
  householdIndex: index('household_idx').on(householdId),
}));

export const paymentsToBills = relations(payments, ({ one }) => ({
  bill: one(bills, {
    fields: [payments.billId],
    references: [bills.id],
  }),
  // Uncomment this to have the type hinting continue to work
  // household: one(households, {
  //   fields: [payments.householdId],
  //   references: [households.id]
  // })
}));

// Uncomment this to see see type hinting go away in the editor
// export const paymentsToHouseholds = relations(payments, ({ one }) => ({
//   household: one(households, {
//     fields: [payments.householdId],
//     references: [households.id],
//   })
// }));