INSERT INTO pending_friends (inviter, invited)
-- VALUES ($1, $2)
select $1, $2
where not exists(select * from pending_friends where inviter like $1 and invited like $2 or inviter like $2 and invited like $1 )
RETURNING *
;
