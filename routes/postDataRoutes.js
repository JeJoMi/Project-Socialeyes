const express = require('express');
const postDataCtrl = require('../logic/postDataCtrl.js');
const router = express.Router();

router.patch('/edit_profile', postDataCtrl.updateProfile);
router.post('/events', postDataCtrl.createEvent);
router.post('/join_events', postDataCtrl.join_events);
// router.post('/user_photos', postDataCtrl.createAlbum);
router.post('/messages', postDataCtrl.createNewMessage);
router.post('/addFriend', postDataCtrl.addFriend);
router.post('/acceptFriend', postDataCtrl.acceptFriend)

module.exports = router;
