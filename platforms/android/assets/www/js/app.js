angular.module('App', ['ionic'])

.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
      .state('start', {
        url: '/start',
        templateUrl: 'views/start/start.html'
      })
    .state('home', {
      url: '/home',
      templateUrl: 'views/home/home.html'
    })
    .state('people', {
      url: '/people',
      controller: 'PeopleController',
      templateUrl: 'views/people/people.html'
    })
    .state('famous', {
      url: '/famous',
      controller: 'FamousController',
      templateUrl: 'views/famous/famous.html'
    })
    .state('cats', {
      url: '/cats',
      controller: 'CatController',
      templateUrl: 'views/cats/cats.html'
    });

  $urlRouterProvider.otherwise('/start');

})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
