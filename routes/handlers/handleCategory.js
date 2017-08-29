const Audiosearch = require('audiosearch-client-node')

const audiosearch = new Audiosearch(process.env.AUDIOSEARCH_APP_ID, process.env.AUDIOSEARCH_SECRET)

function handleCategory (req,res) {
  // TODO buscar podcasts (shows) por categoria de entrada (req.params.category)
  console.log(req.params.category)

   audiosearch.searchCategory(req.params.category)
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
            res.render('pages/category', {
                results: results
            })
        })
        .catch(err => {
            res.send(err)
        });
}

module.exports = handleCategory
