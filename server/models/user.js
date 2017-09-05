const mongoose = require('mongoose')
const Schema = mongoose.Schema

const passportLocalMongoose = require('passport-local-mongoose')

var UserSchema = new Schema({
  username: String,
  firstname: String,
  lastname: String,
  age: Number,
  country: String,
  image: String,
  email: String,
  about: String
}, { collection: 'users' })

const options = {
  usernameField: 'email'
}

UserSchema.plugin(passportLocalMongoose, options)

module.exports = mongoose.model('User', UserSchema)