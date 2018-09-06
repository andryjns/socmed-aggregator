'use strict'
const express = require('express')
const router = express.Router()
const users = require('./userRouter')

router.use('/repo', users)

router.get('/', function(req, res){
    res.redirect('/repo')
})

module.exports = router