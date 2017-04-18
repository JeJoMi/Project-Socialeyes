INSERT INTO users(name, photo)
VALUES($1, $2)
RETURNING
;
