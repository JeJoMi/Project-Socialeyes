SELECT *
FROM event_attendance
full outer join event
ON event.id = event_attendance.event_id
WHERE user_email = $1
;
