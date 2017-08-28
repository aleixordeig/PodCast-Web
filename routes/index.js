const express = require('express')
const router = express.Router()

const handlerIndex = require('./handlers/handlerIndex')
const handlerCategory = require('./handlers/handlerCategory')
const handlerEpisodes = require('./handlers/handlerEpisodes')
const handlerSearch = require('./handlers/handlerSearch')
const handlerLogin = require('./handlers/handlerLogin')
const handlerRegister = require('./handlers/handlerRegister')
const handlerAccount = require('./handlers/handlerAccount')
const handlerResults = require('./handlers/handlerResults')
const handlerFavorites = require('./handlers/handlerFavorites')

router.get('/', handlerIndex)
router.get('/search', handlerSearch)
router.get('/category', handlerCategory)
router.get('/episodes', handlerEpisodes)
router.get('/login', handlerLogin)
router.get('/register', handlerRegister)
router.get('/account', handlerAccount)
router.get('/favorites', handlerFavorites)
router.post('search/id', handlerResults)

module.exports = router
