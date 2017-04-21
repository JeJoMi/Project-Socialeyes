SELECT *
FROM pending_friends
WHERE inviter = $1 OR invited = $1
;
