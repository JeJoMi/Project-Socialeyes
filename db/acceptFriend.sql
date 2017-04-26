insert into friends(user1, user2)
    select $1,$2
    where not exists(select * from friends where user1 like $1 and user2 like $2)
