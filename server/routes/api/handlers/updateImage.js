const path = require('path')
const User = require(path.join(base, 'server/models/user'))


function updateImage (req, res) {
  var { image } = req.body
  const { id } = req.params
  User.findByIdAndUpdate( id, { $set: { image } })
    .then('ok')
}

module.exports = updateImage