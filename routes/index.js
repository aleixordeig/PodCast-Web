const express = require('express')
const router = express.Router()

const handleIndex = require('./handlers/handleIndex')
const handleCategory = require('./handlers/handleCategory')
const handlePodcast = require('./handlers/handlePodcast')
const handleSearch = require('./handlers/handleSearch')
const handleLogin = require('./handlers/handleLogin')
const handleRegister = require('./handlers/handleRegister')
const handleAccount = require('./handlers/handleAccount')
const handleResults = require('./handlers/handleResults')
const handleFavorites = require('./handlers/handleFavorites')

router.get('/', handleIndex)
router.get('/search', handleSearch)
router.get('/category/:category', handleCategory)
router.get('/podcast/:id', handlePodcast)
router.get('/login', handleLogin)
router.get('/register', handleRegister)
router.get('/account', handleAccount)
router.get('/favorites', handleFavorites)
router.post('search/id', handleResults)

module.exports = router
