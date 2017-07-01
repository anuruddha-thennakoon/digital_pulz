// create the controller for sidebar

<<<<<<< .mine
pharmacyModuleApp.controller('sidebarController', ['$scope', '$location', function ($scope, $location) {


    $scope.model = {};
    $scope.model.data = {
      "userRole": "chief"
    };
    


=======
pharmacyModuleApp.controller('sidebarController',function ($scope, $location,$http) {
      // var getUsers = function () {
      //   $http.get('/users').then(function (response) {
      //       $scope.a = response.data;
      //       console.log($scope.a);
      //   });
      // };

      // getUsers();

>>>>>>> .theirs
    $scope.isCurrentPath = function (path) {
      return $location.path() == path;
    };
});
