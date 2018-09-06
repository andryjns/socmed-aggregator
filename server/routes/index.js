'use strict'
const express = require('express')
const router = express.Router()
const users = require('./userRouter')

router.use('/', users)

// router.get('/', function(req, res){
//     res.redirect('/api')
// })

module.exports = router