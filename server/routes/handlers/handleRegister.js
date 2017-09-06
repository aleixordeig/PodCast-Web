const path = require('path')
const User = require(path.join(base, 'server/models/user'))

function handleRegister (req, res) {
  const { email, password } = req.body

  const user = new User({email})

  User.register(user, password, err => {
    if (err) {
      return res.send('mal')
      // res.json({ success: false, msg: 'Sorry. Username already exists.' })
    }
    //res.json({ success: true, msg: 'New user created correctly' })
    res.redirect('/login')
  })
}

module.exports = handleRegister
