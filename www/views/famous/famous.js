angular.module('App')
.controller('FamousController', function ($scope, $http, $ionicLoading) {

  $scope.page = 0;
  $scope.total = 1;
  $scope.famous = [];

  $scope.getFamous = function () {
    $scope.page++;
    $ionicLoading.show();
    $http.get('https://warm-shore-6746.herokuapp.com/people?page=' + $scope.page).success(function (response) {
      angular.forEach(response.results, function (famous) {
        $scope.famous.push(famous);
      });
      $ionicLoading.hide();
      $scope.total = response.totalPages;
      $scope.$broadcast('scroll.infiniteScrollComplete');
    }).error(function (err) {
      $scope.$broadcast('scroll.infiniteScrollComplete');
      console.log(err);
    });
  };

  $scope.getFamous();
});
