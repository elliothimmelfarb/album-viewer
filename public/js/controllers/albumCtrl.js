'use strict';

angular.module('myApp')

.controller('albumCtrl', function($scope, $stateParams, Albums) {
  console.log('albumCtrl!');

  $scope.albumName;
  $scope.images;

  console.log($stateParams);

  Albums.getOne($stateParams.id || $scope.currentAlbum)
    .then(album => {
      $scope.albumName = album.data.name;
      $scope.images = album.data.images;
    })
    .catch(err => {
      console.log(err);
    })

  // $scope.images = $stateParams.album.images;


  $scope.addImage = (imageObj) => {
    Albums.addImage($stateParams.id, imageObj)
      .then(() => {
        $scope.images.push(imageObj);
        $scope.newImage = '';
      })
      .catch(err => {
        console.log(err);
      })
  }
});
