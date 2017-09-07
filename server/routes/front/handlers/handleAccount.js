function handleAccount (req, res) {
  const { user } = req
  res.render('pages/account', { user })
}

module.exports = handleAccount
