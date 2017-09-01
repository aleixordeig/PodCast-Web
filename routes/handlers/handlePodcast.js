const Audiosearch = require('audiosearch-client-node')

const audiosearch = new Audiosearch(process.env.AUDIOSEARCH_APP_ID, process.env.AUDIOSEARCH_SECRET)

function handlePodcast(req, res) {

    console.log(req.params.id)

    audiosearch.getShow(req.params.id)
        .then(function(response) {
            const podcast = [{
                name: response.title,
                description: response.description,
                img: response.image_urls.full
            }]

            console.log(podcast)

            audiosearch.searchEpisodes1(req.params.id)
                .then(function(response) {
                    const episodes = response.results.map(item => {
                        return {
                            id: item.id,
                            episode: item.title,
                            info: item.description,
                            audio: item.audio_files,
                            audioOnline: item.digital_location
                        }
                    })

                    console.log(episodes)

                    res.render('pages/podcast', { podcast, episodes })
                })
        })
}

module.exports = handlePodcast