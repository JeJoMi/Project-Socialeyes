SELECT *
FROM messages
WHERE receivers_email = $1 or senders_email = $1
;
