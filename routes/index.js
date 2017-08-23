const express = require('express')
const router = express.Router()

const showIndex = require('./handlers/showIndex')
const showCategory = require('./handlers/showCategory')
const showEpisodes = require('./handlers/showEpisodes')
const showSearch = require('./handlers/showSearch')
const showLogin = require('./handlers/showLogin')
const showRegister = require('./handlers/showRegister')
const showAccount = require('./handlers/showAccount')

router.get('/', showIndex)
router.get('/search', showSearch)
router.get('/category', showCategory)
router.get('/episodes', showEpisodes)
router.get('/login', showLogin)
router.get('/register', showRegister)
router.get('/account', showAccount)

module.exports = router
