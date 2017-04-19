INSERT INTO event (description, created_at, event_date, event_name)
VALUES ($1, $2, $3, $4)
RETURNING *
;
