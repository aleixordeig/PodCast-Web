const express = require('express')
const router = express.Router()

const path = require('path')
const passport = require('./../../config/passport/')


const showLogin = require('./handlers/showLogin')
const showRegister = require('./handlers/showRegister')
const handleLogin = require('./handlers/handleLogin')
const handleRegister = require('./handlers/handleRegister')

router.get('/login', showLogin)
router.get('/register', showRegister)

router.post('/login', passport.authenticate('local', {session: true}), handleLogin)
router.post('/register', handleRegister)

module.exports = router