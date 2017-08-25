function showSearch (req,res) {
  console.log(req.query)

  var data = [{
    title: 'One',
    description: 'NOW.....',
    img: 'http',
    podcast: 'economy'
  },
  {
    title: 'two',
    description: 'NasOW.....',
    img: 'http',
    podcast: 'economy'
  },
  {
    title: 'Three',
    description: 'NOW.....',
    img: 'http',
    podcast: 'economy'
  }
  ]

	res.render('pages/search', { 
    getSearch: function (){
        return req.query.search
        }
   })
}

module.exports = showSearch


