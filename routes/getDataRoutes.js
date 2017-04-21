const express = require('express');
const getDataCtrl = require('../logic/getDataCtrl');
const router = express.Router()

router.get('/user', getDataCtrl.user)
router.get('/user', getDataCtrl.user)
router.get('/profile/:id', getDataCtrl.profile)
router.get('/events', getDataCtrl.events)



module.exports=router
