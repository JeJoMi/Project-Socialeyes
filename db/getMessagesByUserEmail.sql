select *
    from messages
    full outer join users
    on users.email = messages.senders_email
    where messages.senders_email != $1
union all
    select *
    from messages
    full outer join users
    on users.email = messages.receivers_email
    where messages.receivers_email != $1
order by created_at;
