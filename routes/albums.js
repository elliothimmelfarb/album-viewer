'use strict';

const express = require('express');
const Album = require('../models/album')
const router = express.Router();

router.route('/')
  .get((req, res) => {
    Album.find({}, (err, albums) => {
      res.status(err ? 400 : 200).send(err || albums);
    }).populate('images');
  })
  .post((req, res) => {
    Album.create(req.body, (err, album) => {
      res.status(err ? 400:200).send(err || album);
    });
  })
  .delete((req,res) => {
    Album.remove({}, (err, confirmation) => {
      res.status(err ? 400:200).send(err || confirmation);
    });
  });

router.get('/:id', (req, res) => {
  Album.findById(req.params.id, (err, album) => {
    res.status(err ? 400 : 200).send(err || album);
  }).populate('images');
})

router.put('/:id', (req, res) => {
  Album.findOneAndModify(id, req.body, (err, result) => {
    res.status(err ? 400 : 200).send(err || result);
  });
});

router.post('/addImageTo/:albumId', (req, res) => {
  Album.addImageTo(req.params.albumId, req.body, (err, confirmation) => {
    res.status(err ? 400 : 200).send(err || confirmation);
  });
});

router.delete('/deleteImageFrom/:albumId/:imageId', (req, res) => {
  Album.deleteImageFrom(req.params.albumId, req.params.imageId, (err, confirmation) => {
    res.status(err ? 400 : 200).send(err || confirmation);
  });
});

module.exports = router;
