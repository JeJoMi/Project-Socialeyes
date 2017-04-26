SELECT *
FROM pending_friends
full outer join users
on users.email = pending_friends.inviter
WHERE inviter = $1 OR invited = $1
;
