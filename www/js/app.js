// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngMap'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.infos', {
    url: '/infos',
    views: {
      'menuContent': {
        templateUrl: 'templates/infos.html',
        controller:'MapCtrl'
      }
    }
  })
  
  .state('app.accueil', {
    url: '/accueil',
    views: {
      'menuContent': {
        templateUrl: 'templates/accueil.html'
      }
    }
  })

  .state('app.lemusee', {
      url: '/lemusee',
      views: {
        'menuContent': {
          templateUrl: 'templates/lemusee.html'
        }
      }
    })
    .state('app.quizz', {
      url: '/quizz',
      views: {
        'menuContent': {
          templateUrl: 'templates/quizz.html',

            controller:'QuizzCtrl'

        }
      }
    })
    .state('app.scores', {
      url: '/scores',
      views: {
        'menuContent': {
          templateUrl: 'templates/scores.html'
        }
      }
    });
  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/accueil');
});
