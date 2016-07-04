'use strict';

const mongoose = require('mongoose');

let imageSchema = new mongoose.Schema({
  url: {
    type: String,
    required: [true, 'Image requires a url.']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});




let Image = mongoose.model('Image', imageSchema);

module.exports = Image
