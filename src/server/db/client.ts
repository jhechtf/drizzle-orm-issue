import { drizzle } from 'drizzle-orm/postgres-js';
import Pg from 'pg';
import * as schema from './schema';

const connection = new Pg.Client({
  // Fake DB, update
  connectionString: 'postgres://user:pw@localhost:5432/db'
});

const db = drizzle(connection, { schema });

// Checking type hinting below

db.query.payments.findFirst({
  with: {

  }
});