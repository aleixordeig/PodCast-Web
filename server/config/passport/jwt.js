const { Strategy, ExtractJwt } = require('passport-jwt')

const path = require('path')
const User = require(path.join(base, 'models/user'))

const SECRET = process.env.SECRET || 'well'

const jwtOptions = {
  secretOrKey: 'SECRET',
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}

const strategy = new Strategy(jwtOptions, (jwtPayload, done) => {
  User.findById(jwtPayload.id)
    .then(user => {
      if (user) done(null, user)
      else done(null, false)
    })
    .catch(err => done(err, false))
})

module.exports = strategy