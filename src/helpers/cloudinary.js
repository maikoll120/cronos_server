const cloudinary = require('cloudinary').v2

async function uploadImage (uploadPreset, imageData) {
  if (imageData && imageData.search('data:image') >= 0) {
    const response = await cloudinary.uploader.upload(imageData, {
      upload_preset: uploadPreset
    })

    return response
  }

  return imageData
}

async function deleteImage (publicId, invalidate = true) {
  if (publicId) {
    await cloudinary.uploader.destroy(publicId, { invalidate })
  }
}

module.exports = {
  uploadImage,
  deleteImage
}
