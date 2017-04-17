CREATE TABLE IF NOT EXISTS rating(
  id SERIAL PRIMARY KEY,
  event_id SERIAL,
  user_id SERIAL,
  rating SERIAL,
  review TEXT
);
