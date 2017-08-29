const Audiosearch = require('audiosearch-client-node')

const audiosearch = new Audiosearch(process.env.AUDIOSEARCH_APP_ID, process.env.AUDIOSEARCH_SECRET)



function handleEpisodes(req, res) {

    audiosearch.getShow(req.params.id)
        .then(function(response) {
            const show = response.show.map(item => {
                return {
                    name: item.title,
                    description: item.description,
                    img: item.image_urls.full
                }
            })
            console.log(show)
            res.render('pages/episodes', {
                show: show
            })
        })
        .catch(err => {
            res.send(err)
        });
}

module.exports = handleEpisodes