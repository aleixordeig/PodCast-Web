const express = require('express')
const path = require('path')
const app = express()

const PORT = process.env.PORT || 3000

app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, 'public')))

// app.get('/', (req,res) => {
// 	res.render('pages/index')
// })

// app.get('/category', (req,res) => {
// 	res.render('pages/category')
// })

// app.get('/episodes', (req,res) => {
// 	res.render('pages/episodes')
// })

// app.get('/search', (req,res) => {
// 	res.render('pages/search')
// })

// app.get('/login', (req,res) => {
// 	res.render('pages/login')
// })

// app.get('/register', (req,res) => {
// 	res.render('pages/register')
// })

// app.get('/a', (req,res) => {
// 	res.render('pages/account')
// })

const routesApp = require('./routes/')

app.use(routesApp)
app.listen(PORT)
console.log(`Magic happens at PORT ${PORT}...`)
