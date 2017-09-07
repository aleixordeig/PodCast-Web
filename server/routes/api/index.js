const express = require('express')
const router = express.Router()

const path = require('path')
const passport = require('./../../config/passport/')

/* api handling */

const getDetailsUser = require('./handlers/getDetailsUser')
const updateDataUser = require('./handlers/updateDataUser')
const updateImage = require('./handlers/updateImage')

/* api handling */
router.get('/user/:id', getDetailsUser)
router.post('/user/update', updateDataUser)
router.put('/user/:id/update/image', updateImage)


module.exports = router