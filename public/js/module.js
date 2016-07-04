'use strict';

const app = angular.module('myApp', ['ui.router']);

const albumList = {
  templateUrl: '/html/albumList.html',
}

app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('home', {
      url: '/',
      views: {
        albumList: albumList,
        mainView: {
          templateUrl: 'html/home.html',
        }
      }
    })
    .state('albumView', {
      url: '/album/:id',
      views: {
        albumList: albumList,
        mainView: {
          templateUrl: 'html/album.html',
          controller: 'albumCtrl',
          params: {id: null}
        }
      }
    })
    .state('viewImage', {
      url: '/album/viewImage/:url',
      views: {
        albumList: albumList,
        mainView: {
          templateUrl: 'html/viewImage.html',
          controller: 'viewImageCtrl',
          params: {image: null}
        }
      }
    })
  $urlRouterProvider.otherwise('/');
});
