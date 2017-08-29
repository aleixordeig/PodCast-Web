const Audiosearch = require('audiosearch-client-node')

const audiosearch = new Audiosearch(process.env.AUDIOSEARCH_APP_ID, process.env.AUDIOSEARCH_SECRET)

function handlePodcast(req, res) {

    audiosearch.getShow(req.params.id)
        .then(function(response) {
            const podcast = [{
                name: response.title,
                description: response.description,
                img: response.image_urls.full
            }]

            console.log(podcast)

            res.render('pages/podcast', { podcast })
        })
}

module.exports = handlePodcast
