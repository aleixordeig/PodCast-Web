const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
// const jwtStrategy = require('./jwt')

const path = require('path')
const User = require(path.join(base, 'server/models/user'))

passport.use(new LocalStrategy({
    usernameField: 'email'
}, User.authenticate()))

// passport.serializeUser(User.serializeUser())
// passport.deserializeUser(User.deserializeUser())

// passport.use(jwtStrategy)

module.exports = passport