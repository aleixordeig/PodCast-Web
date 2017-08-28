var Audiosearch = require('audiosearch-client-node');

 

function handlerSearch (req,res) {
  var AUDIOSEARCH_APP_ID = '4e23a0f8f5498359e73caa1e0a3de7fb3821622b8762f0b13399e5553d8504c0'
  var AUDIOSEARCH_SECRET = '7f32aafcbb0c5e3905f954ce633eea4c66ca6f066fb8ef96e0d0b4768579274d'
  
  var audiosearch = new Audiosearch(process.env.AUDIOSEARCH_APP_ID, process.env.AUDIOSEARCH_SECRET);
  console.log(req.query)

  Audiosearch.prototype.searchEpisodes = function (queryString, params) {
  return this.get('/search/episodes/'+encodeURI(queryString), params);
  };

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

module.exports = handlerSearch


