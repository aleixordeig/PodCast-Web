const express = require('express')
const path = require('path')
const app = express()

const PORT = process.env.PORT || 3000

app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, 'public')))

const routesApp = require('./routes/')

app.use(routesApp)
app.listen(PORT)
console.log(`Magic happens at PORT ${PORT}...`)
