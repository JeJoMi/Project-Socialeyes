SELECT *
FROM event
WHERE created_by = $1
RETURNING *
;
