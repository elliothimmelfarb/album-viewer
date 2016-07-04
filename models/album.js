'use strict';

const mongoose = require('mongoose');
const Image = require('./image');

let albumSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Album requires a name.']
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  images: {
    type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Image'}]
  }
});

albumSchema.statics.deleteImageFrom = function(albumId, imageId, cb) {
  imageId = mongoose.Schema.Types.ObjectId(imageId); // TODO: $pull not working properly
  Album.findByIdAndUpdate(albumId, {$pull: {images: {_id: imageId}}}, (err, confirmation) => {
    if (err) return cb(err);
    cb(null, confirmation)
  });
};

albumSchema.methods.addImage = function(body, cb) {
  Image.create(body, (err, image) => {
    if (err) return cb(err)
    this.images.push(image._id);
    this.save(err => {
      if (err) return cb(err);
      cb(null, 'image added!');
    });
  });
};

albumSchema.statics.addImageTo = function(albumId, body, cb) {
  Album.findById(albumId, (err, album) => {
    if (err) return cb(err);
    album.addImage(body, (err, confirmation) => {
      err ? cb(err) : cb(null, confirmation);
    });
  });
};


let Album = mongoose.model('Album', albumSchema);

module.exports = Album;
