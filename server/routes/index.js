const express = require('express')
const router = express.Router()
const passport = require('./../config-passport/')

const handleIndex = require('./handlers/handleIndex')
const handleCategory = require('./handlers/handleCategory')
const handlePodcast = require('./handlers/handlePodcast')
const handleSearch = require('./handlers/handleSearch')
const showLogin = require('./handlers/showLogin')
const showRegister = require('./handlers/showRegister')
const handleAccount = require('./handlers/handleAccount')
const handleFavorites = require('./handlers/handleFavorites')
const handleLogin = require('./handlers/handleLogin')
const handleRegister = require('./handlers/handleRegister')



router.get('/', handleIndex)
router.get('/search', handleSearch)
router.get('/category/:category', handleCategory)
router.get('/podcast/:id', handlePodcast)
router.get('/login', showLogin)
router.get('/register', showRegister)
router.get('/account', handleAccount)
router.get('/favorites', handleFavorites)

router.post('/login', passport.authenticate('local', {session: true}), handleLogin)
router.post('/register', handleRegister)


module.exports = router
