const express = require('express');
const postDataCtrl = require('../logic/postDataCtrl.js');
const router = express.Router();

router.patch('/edit_profile', postDataCtrl.updateProfile);


module.exports = router;
