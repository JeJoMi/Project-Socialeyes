DELETE FROM messages
WHERE senders_email = $1 and receivers_email = $2 and message = $3
;
