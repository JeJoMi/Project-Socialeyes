-- INSERT INTO users (email)
-- VALUES ($1)
-- ON CONFLICT (email) DO NOTHING
-- RETURNING *
-- ;

insert into users(email)
  select $1
  where not exists (select * from users where email = $1)
RETURNING *
;
