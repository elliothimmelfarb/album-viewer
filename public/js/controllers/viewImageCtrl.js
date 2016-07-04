'use strict';

angular.module('myApp')

.controller('viewImageCtrl', function($scope, $stateParams) {
  console.log('viewImageCtrl!');

  $scope.url = $stateParams.url;
});
