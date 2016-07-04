'use strict';

angular.module('myApp')

.controller('mainCtrl', function($scope, Albums) {

  $scope.albums = [];
  $scope.currentAlbum = '';

  Albums.get()
    .then(albums => {
      $scope.albums = albums.data;
    })
    .catch(err => {
      console.log(err);
    })

  console.log('mainCtrl!');
  $scope.addAlbum = (album) => {
    Albums.add(album)
      .then(newAlbum => {
        console.log(newAlbum);
        $scope.albums.push(newAlbum.data);
        $scope.album = '';
      })
      .catch(err => {
        console.log(err);
      })
  }
});
