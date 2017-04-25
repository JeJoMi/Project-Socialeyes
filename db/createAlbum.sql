INSERT INTO album (user_email, description, photo_url)
VALUES ($1, $2, $3)
RETURNING *
;
