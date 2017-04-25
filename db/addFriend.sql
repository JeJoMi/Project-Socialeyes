INSERT INTO pending_friends (inviter, invited)
VALUES ($1, $2)
RETURNING *
;
