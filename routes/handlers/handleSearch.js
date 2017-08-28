const Audiosearch = require('audiosearch-client-node')

const audiosearch = new Audiosearch(process.env.AUDIOSEARCH_APP_ID, process.env.AUDIOSEARCH_SECRET)

function handleSearch(req, res) {

    audiosearch.searchShows(req.query.query)
        .then(function(response) {
            const results = response.results.map(item => {
                return {
                    id: item.id,
                    name: item.title,
                    description: item.description,
                    img: item.image_urls.full
                }
            })
            
            console.log(results)

            res.render('pages/search', {
                getSearch: function() {
                    return req.query.query
                },
                results: results
            })
        })
        .catch(err => {
            res.send(err)
        });
}

module.exports = handleSearch

// searchShows function added to node_modules!!
// Audiosearch.prototype.searchShows = function (queryString, params) {
//   return this.get('/search/shows/'+encodeURI(queryString), params);
// };