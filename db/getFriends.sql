SELECT *
FROM friends
WHERE user1 = $1 or user2 = $1
;
