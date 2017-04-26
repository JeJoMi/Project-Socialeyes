insert into event_attendance (event_id, user_email)
    select $1, $2
    where not exists(select * from event_attendance where event_id = $1 and user_email like $2)
