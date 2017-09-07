/* .env */

const dotenv = require('dotenv')
dotenv.load()

global.base = process.cwd()

/* audiosearch api */

const Audiosearch = require('audiosearch-client-node')

Audiosearch.prototype.searchShows = function (queryString, params) {
  return this.get('/search/shows/'+encodeURI(queryString), params)
}

Audiosearch.prototype.searchCategory = function (params) {
  return this.get('/search/shows/*?filters[categories.name]=' + params);
};

Audiosearch.prototype.searchEpisodes1 = function (params) {
  return this.get('/search/episodes/*?filters[show_id]=' + params);
};

/* mongoose setup */

const mongoose = require('mongoose')
mongoose.Promise = Promise
const urlDB = process.env.DR_URL || 'mongodb://localhost:27017/podcastweb'
mongoose.connect(urlDB, {useMongoClient: true})

/* express setup */

const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const passport = require('./config/passport')
app.use(passport.initialize())

app.set('view engine', 'pug')
app.set('views', 'server/views')

const path = require('path')
app.use(express.static(path.join(__dirname, '../client')))

const routesApp = require('./routes/')
app.use(routesApp)

const PORT = process.env.PORT || 4000
app.listen(PORT)

console.log(`Magic happens at PORT ${PORT}...`)
