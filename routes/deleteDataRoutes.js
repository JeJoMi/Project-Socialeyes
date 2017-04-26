const express = require('express');
const deleteDataCtrl = require('../logic/deleteDataCtrl');

const router = express.Router()

router.delete('/pending_friends', deleteDataCtrl.pending_friends)

module.exports = router;
