INSERT INTO event (description, created_at, event_date, event_name, created_by)
VALUES ($1, $2, $3, $4, $5)
RETURNING *
;
