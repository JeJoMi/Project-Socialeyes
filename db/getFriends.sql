select *
from friends
join users
on users.email = friends.user2
where friends.user1 = $1
