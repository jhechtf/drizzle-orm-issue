# Purpose

The purpose of this repo is to share with the Drizzle ORM team an issue that I am when using 
Drizzle ORM, specifically the query builder, when having multiple `relations` calls on the same table.

## Screenshots

### Before adding in a second `relations` call on `payments` table

![Type hinting is working](./images/single-relations-call-on-payments.PNG)

### After uncommenting lines 32-38 in `payments` table

![New values for payments.table.ts](./images/payments-table-with-multiple-relations-calls.PNG)

![No type hinting available](./images/no-type-hinting-after-multiple-relations-calls-on-payments.PNG)

### Combining both calls into one

![New content for payments.table.ts](./images//payments-table-single-relations-call.PNG)

![Working type hints](./images/type-hinting-with-both-available-values.PNG)

## Description of issue

When using the `relations` helper to map tables to one another for use with the `db.query.[table-name]` helpers, I lose type hinting inside the `with` option whenever a table appears in multiple `relations` calls, as evidenced by the example `payments.table.ts` file, which is a simplified version from a project of mine.