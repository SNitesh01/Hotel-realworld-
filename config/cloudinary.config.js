const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

require('dotenv').config();

cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.CLOUD_API_KEY, 
  api_secret: process.env.CLOUD_API_SECRET,
  secure: true
});


/**
 * 
 * @param {string} filename 
 * @returns {string}
 */
function getFileMimetype(filename) {
  return filename.replace(/.*\.(.*)/m, '$1');
}

/**
 * 
 * @param {string} filename
 * @returns {string}
 */
function getOnlyFileName(filename) {
  return filename.replace(/.*-(.*)/m, '$1');
}

/**
 * 
 * @param {Array} strings 
 * @returns {string}
 */
function concat(...strings) {
  return strings.map(str => {
    return str;
  }).join('');
}

/**
 * 
 * @param {string} filepath 
 */
function deleteFile(filepath) {
  fs.unlink(
    path.join(
      __dirname,
      '../',
      filepath
    ), () => {}
  );
}
module.exports = function uploadFile(file) {
  return new Promise((resolve, reject) => {
    const filename = concat(
      file.md5,
      getOnlyFileName(file.tempFilePath),
      '.', getFileMimetype(file.name)
    );

    cloudinary.uploader.upload(file.tempFilePath, {
      filename_override: filename
    }, function (err, res) {
      resolve({
        ...res,
        delete: () => deleteFile(file.tempFilePath)
      })
    });
  });
}