const express = require('express');
const deleteDataCtrl = require('../logic/deleteDataCtrl');

const router = express.Router()

router.delete('/pending_friends', deleteDataCtrl.pending_friends)
router.delete('/friends', deleteDataCtrl.deleteFriends)
router.delete('/messages', deleteDataCtrl.deleteMessages)

module.exports = router;
