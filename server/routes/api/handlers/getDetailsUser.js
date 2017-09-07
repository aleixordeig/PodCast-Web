const path = require('path')
const User = require(path.join(base, 'server/models/user'))


function getDetailsUser (req, res) {
  var { id } = req.params
  User.findById(id, (_, user) => {
    res.json(user)
  })
}

module.exports = getDetailsUser