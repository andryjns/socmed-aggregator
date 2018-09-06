'use strict'

const express = require('express')
const router = express.Router()
const userController = require('./../controllers/userController')


router.get('/listStar', userController.listStar)
router.post('/createRepo', userController.createRepo)
router.get('/searchRepo/:name', userController.searchRepo)
router.delete('/unstarRepo/:owner/:repo', userController.unstarRepo)


module.exports = router 