const path = require('path')
const User = require(path.join(base, 'models/user'))

function handleRegister (req, res) {
  const { email, password } = req.body

  const user = new User({email})

  User.register(user, password, err => {
    if (err) {
      return res.json({ success: false, msg: 'Sorry. Username already exists.' })
    }
    res.json({ success: true, msg: 'New user created correctly' })
  })
}

module.exports = handleRegister