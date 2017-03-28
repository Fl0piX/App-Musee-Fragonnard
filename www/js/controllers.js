angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
})

.controller('MapCtrl', function($scope, NgMap) {
  NgMap.getMap().then(function(map) {
    $scope.map = map;
  });
})

.controller('QuizzCtrl', function($scope, $http) {
    $http({
        method: 'GET',
        url: 'http://localhost/api/api.php'
    }).then(function successCallback(response) {
        $scope.quizz = response.data;
    })
})

.controller('QuestionCtrl', function($scope, $http, $stateParams){
    $http({
        method:'GET',
        url: 'http://localhost/api/api.php' + $stateParams.idquestion
    }).then(function successCallback(response){
        $scope.question = response.data;
    });
});
