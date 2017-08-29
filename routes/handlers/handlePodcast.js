const Audiosearch = require('audiosearch-client-node')

const audiosearch = new Audiosearch(process.env.AUDIOSEARCH_APP_ID, process.env.AUDIOSEARCH_SECRET)

function handlePodcast(req, res) {

    audiosearch.getShow(req.params.id)
        .then(function(response) {
            console.log(response)
            const podcast = {
                name: response.podcast.title,
                description: response.podcast.description,
                img: response.podcast.image_urls.full
            }

            console.log(podcast)

            res.render('pages/podcast', { podcast })
        })
        .catch(err => {
            res.send(err)
        });

}

module.exports = handlePodcast
