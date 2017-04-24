INSERT INTO event (event_date, event_name, description, created_by, event_types, location, photo)
VALUES ($1, $2, $3, $4, $5, $6, $7)
RETURNING *
;
