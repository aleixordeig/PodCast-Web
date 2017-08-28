const Audiosearch = require('audiosearch-client-node')
 
const audiosearch = new Audiosearch(process.env.AUDIOSEARCH_APP_ID, process.env.AUDIOSEARCH_SECRET)

function handleSearch (req,res) {
	res.render('pages/search', { 
    getSearch: function (){
        return req.query.query
        },
    getResult : function () {
         audiosearch.searchShows(req.query.query).then(function (results) {
          const _results = results.map(item => {
             return {
                name: item.name,
                // des...
             }
          })
          return console.log(results + '/' + results.title)
        });
       }
   })
}

module.exports = handleSearch


// searchShows function added to node_modules!!
// Audiosearch.prototype.searchShows = function (queryString, params) {
//   return this.get('/search/shows/'+encodeURI(queryString), params);
// };
