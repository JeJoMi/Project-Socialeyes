delete from pending_friends
    where inviter = $1 and invited = $2
