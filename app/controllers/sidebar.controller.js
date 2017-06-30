// create the controller for sidebar

pharmacyModuleApp.controller('sidebarController',function ($scope, $location,$http) {
      // var getUsers = function () {
      //   $http.get('/users').then(function (response) {
      //       $scope.a = response.data;
      //       console.log($scope.a);
      //   });
      // };

      // getUsers();

    $scope.isCurrentPath = function (path) {
      return $location.path() == path;
    };
});
