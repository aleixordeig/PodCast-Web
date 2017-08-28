const Audiosearch = require('audiosearch-client-node')

const audiosearch = new Audiosearch(process.env.AUDIOSEARCH_APP_ID, process.env.AUDIOSEARCH_SECRET)

function handlerSearch(req, res) {
    console.log(req.query)

    res.render('pages/search', {
        getSearch: function() {
            return req.query.search
        }
        getResult : function () {
         audiosearch.searchShow('text query').then(function (results) {
        });
       }
    })
}

module.exports = handlerSearch