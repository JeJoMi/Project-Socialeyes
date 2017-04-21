CREATE TABLE IF NOT EXISTS messages(
  senders_email TEXT,
  receivers_email TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  message TEXT,
  read BOOLEAN DEFAULT FALSE
);
