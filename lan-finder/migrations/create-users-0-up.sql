BEGIN;
CREATE TABLE IF NOT EXISTS users(
  id SERIAL PRIMARY KEY,
  first_name TEXT,
  last_name TEXT,
  email TEXT,
  photo TEXT,
  gender TEXT,
  interests TEXT,
  event_types TEXT
);
COMMIT;
