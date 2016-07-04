'use strict'

angular.module('myApp')

.service('Albums', function($http) {
  this.add = (album) => {
    return $http.post('/api/albums', album);
  }
  this.get = () => {
    return $http.get('/api/albums');
  }
  this.addImage = (albumId, imageObj) => {
    return $http.post(`/api/albums/addImageTo/${albumId}`, imageObj);
  }
  this.getOne = (albumId) => {
    return $http.get(`/api/albums/${albumId}`);
  }
})
