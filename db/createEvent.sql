INSERT INTO event (description, created_at, event_date, event_name, created_by, event_types, location)
VALUES ($1, $2, $3, $4, $5, $6, $7)
RETURNING *
;
