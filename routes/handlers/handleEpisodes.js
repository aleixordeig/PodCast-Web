const Audiosearch = require('audiosearch-client-node')
const audiosearch = new Audiosearch(process.env.AUDIOSEARCH_APP_ID, process.env.AUDIOSEARCH_SECRET)



function handleEpisodes (req,res) {
  console.log(req.params.id)
  audiosearch.getShow(req.params.id).then(function (results) {
  console.log(results)
  });
	res.render('pages/episodes')
}

module.exports = handleEpisodes
