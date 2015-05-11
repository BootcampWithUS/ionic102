angular.module('App')
.controller('CatController', function ($scope, $http, $ionicLoading) {
  $ionicLoading.show();
  $http.get('https://warm-shore-6746.herokuapp.com/cats').success(function (cats) {
    $scope.cats = cats;
    $ionicLoading.hide();
  }).error(function (err) {
    $ionicLoading.show({
      template: 'Could not load weather. Please try again later.',
      duration: 3000
    });
  });

});
