INSERT INTO event_attendance (event_id, user_email)
VALUES ($1, $2)
RETURNING *
;
