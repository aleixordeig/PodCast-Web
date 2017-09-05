/* Express And Path */
const express = require('express')
const path = require('path')
const app = express()

/* Doten V Model */

const dotenv = require('dotenv')
dotenv.load()

/* NPM Added Functuions */

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



/* bodyParser */

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/* Environment Variables */

const PORT = process.env.PORT || 4000
const urlDB = process.env.urlDB || 'mongodb://localhost:27017/podcastweb'

/* Mongoose */

const mongoose = require('mongoose')
mongoose.Promise = Promise
mongoose.connect(urlDB, {useMongoClient: true})

/* Mongoose models */

/* Passport Load */
const passport = require('./config-passport/')
app.use(passport.initialize())



app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, '../client')))

const routesApp = require('./routes/')

app.use(routesApp)

app.listen(PORT)

console.log(`Magic happens at PORT ${PORT}...`)
