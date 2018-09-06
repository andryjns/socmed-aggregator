'use strict'

const express = require('express')
const router = express.Router()
const userController = require('./../controllers/userController')


router.get('/list', userController.listStar)
router.post('/create', userController.createRepo)
router.get('/search/:name', userController.searchRepo)
router.delete('/unstar/:owner/:repo', userController.unstarRepo)


module.exports = router 