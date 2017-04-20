UPDATE users
SET first_name = $1, last_name = $2, gender = $3, interests = $4, event_types = $5, photo = $6
WHERE email = $7
RETURNING *
;
