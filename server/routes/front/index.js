const express = require('express')
const router = express.Router()

const path = require('path')

const handleIndex = require('./handlers/handleIndex')
const handleCategory = require('./handlers/handleCategory')
const handlePodcast = require('./handlers/handlePodcast')
const handleSearch = require('./handlers/handleSearch')
const handleAccount = require('./handlers/handleAccount')
const handleFavorites = require('./handlers/handleFavorites')

/* navigation handling */

router.get('/', handleIndex)
router.get('/search', handleSearch)
router.get('/category/:category', handleCategory)
router.get('/podcast/:id', handlePodcast)
router.get('/user', handleAccount)
router.get('/favorites', handleFavorites)

module.exports = router


