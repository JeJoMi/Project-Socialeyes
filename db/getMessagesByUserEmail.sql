SELECT *
FROM messages
WHERE receivers_email = $1
RETURNING *
;
