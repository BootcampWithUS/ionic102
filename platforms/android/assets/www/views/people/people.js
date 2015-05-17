angular.module('App')
.controller('PeopleController', function ($scope) {
  $scope.people = {
    name: "Stephannie",
    image: "http://api.randomuser.me/portraits/thumb/women/39.jpg",
    location: {
        street: "1969 calle de alberto aguilera",
        city: "la coruña",
        state: "asturias",
        zip: "56298"
      },
  };
});
