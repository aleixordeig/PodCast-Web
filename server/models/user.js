
const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId
const collection = 'users'

var UserSchema = new Schema({
  username: String,
  firstname: String,
  lastname: String,
  age: Number,
  country: String,
  image: String,
  email: String,
  about: String
}, { collection })

const options = {
  usernameField: 'email'
}

UserSchema.plugin(passportLocalMongoose, (options))

module.exports = mongoose.model('User', UserSchema)