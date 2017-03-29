angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
})

.controller('MapCtrl', function($scope, NgMap) {
  NgMap.getMap().then(function(map) {
    $scope.map = map;
  });
})

<<<<<<< HEAD
.controller('QuizzCtrl', function($scope, $http) {
=======
.controller('questionCtrl', function($scope, $http) {
>>>>>>> 6d7a7fa3ec3da734ff720c89b8e08905c22462ba
    $http({
        method: 'GET',
        url: 'http://localhost/api/api.php'
    }).then(function successCallback(response) {
<<<<<<< HEAD
        $scope.quizz = response.data;
    })
})

.controller('QuestionCtrl', function($scope, $http, $stateParams){
    $http({
        method:'GET',
        url: 'http://localhost/api/api.php' + $stateParams.idquestion
    }).then(function successCallback(response){
        $scope.question = response.data;
=======
      $scope.question = response.data;
>>>>>>> 6d7a7fa3ec3da734ff720c89b8e08905c22462ba
    });
});
