const cloudinary  = require('cloudinary');
const del = require('del')
const path = require('path')

const uploadFolderPath = path.join(__dirname, '../upload' )

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME || 'duaauvrnf',
  api_key: process.env.API_KEY || '938249892175117',
  api_secret: process.env.API_SECRET || 'YmU4Kp9MlnEdMLGHJc6N7e-YybY'
});

function uploadCloudinary(req, res, next) {
  if(req.file) {
    cloudinary.uploader.upload(req.file.path, ({ url }) => {
      if (url) {
        req.imageLink = url
        // delete files inside folder but not the folder itself
        del.sync([`${uploadFolderPath}/**`, `!${uploadFolderPath}`]);
        next();
      }
      else {
        res.status(404).send("Oh uh, something went wrong");
      }
    })
  } else {
    next();
  }
}

module.exports = uploadCloudinary