CREATE TABLE IF NOT EXISTS event (
  id SERIAL PRIMARY KEY,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  event_date TEXT,
  event_name TEXT,
  created_by TEXT,
  event_types TEXT
);
