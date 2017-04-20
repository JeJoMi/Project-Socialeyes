CREATE TABLE IF NOT EXISTS event_attendance(
  event_id INTEGER references event(id),
  user_email TEXT
);
