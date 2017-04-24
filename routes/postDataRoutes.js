const express = require('express');
const postDataCtrl = require('../logic/postDataCtrl.js');
const router = express.Router();

router.patch('/edit_profile', postDataCtrl.updateProfile);
router.post('/events', postDataCtrl.createEvent);


module.exports = router;
