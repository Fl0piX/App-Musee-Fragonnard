angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
})

.controller('MapCtrl', function($scope, NgMap) {
  NgMap.getMap().then(function(map) {
    $scope.map = map;
  });
})

.controller('apiCtrl', function($scope, $http) {
    $http({
      method: 'GET',
      url: 'api.php'
    }).then(function successCallback(response) {
      $scope.api = response.data;
    });
)};
