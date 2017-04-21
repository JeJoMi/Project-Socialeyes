CREATE TABLE IF NOT EXISTS album (
  id SERIAL PRIMARY KEY,
  user_email TEXT,
  description VARCHAR(140),
  photo_url TEXT,
  posted_date TIMESTAMP WITH TIME ZONE DEFAULT NOW()
)
