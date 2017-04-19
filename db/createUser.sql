-- INSERT INTO users (email)
-- VALUES ($1)
-- ON CONFLICT (email) DO NOTHING
-- RETURNING *
-- ;

INSERT INTO users(email)
  SELECT $1
  WHERE NOT EXISTS (SELECT * FROM users WHERE email = $1)
RETURNING *
;
