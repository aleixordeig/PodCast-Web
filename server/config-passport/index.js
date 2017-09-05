const passport = require('passport')
const path = require('path')

const LocalStrategy = require('passport-local').Strategy
const jwtStrategy = require('./strategies/jwt')


const User = require(path.join(__dirname, '../models/user'))

passport.use(new LocalStrategy(User.authenticate()))
passport.use(jwtStrategy)

module.exports = passport