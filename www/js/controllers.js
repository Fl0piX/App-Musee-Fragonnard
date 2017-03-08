angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
})


.controller('MapCtrl', function($scope, NgMap) {
  NgMap.getMap().then(function(map) {
    $scope.map = map;
  });
});
