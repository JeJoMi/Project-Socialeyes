INSERT INTO messages (senders_email, receivers_email, message)
VALUES ($1, $2, $3)
RETURNING *
;
