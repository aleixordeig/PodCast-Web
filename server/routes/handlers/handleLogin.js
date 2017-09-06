const jwt = require('jsonwebtoken')

function handleLogin (req, res) {
  // const { email, password } = req.body

  const { _id: id, email } = req.user
  const token = jwt.sign({id, email}, 'well')
  res.redirect(`/account/${token}`)
}

module.exports = handleLogin
