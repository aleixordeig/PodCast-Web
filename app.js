
const dotenv = require('dotenv')
dotenv.load()

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

const express = require('express')
const path = require('path')
const app = express()

const PORT = process.env.PORT || 4000

app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, 'public')))

const routesApp = require('./routes/')

app.use(routesApp)

app.listen(PORT)

console.log(`Magic happens at PORT ${PORT}...`)
