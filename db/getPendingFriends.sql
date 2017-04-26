SELECT *
FROM pending_friends
full outer join users
on users.email = pending_friends.inviter
WHERE invited = $1
;
