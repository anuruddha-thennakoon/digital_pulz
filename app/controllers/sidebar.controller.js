// create the controller for sidebar
pharmacyModuleApp.controller('sidebarController', function ($scope, $location, $http, $cookies) {

  var a = $cookies.get("userRole");
  console.log('Role --->' + a);

  $scope.role=$cookies.get("userRole");

  $scope.isCurrentPath = function (path) {
    return $location.path() == path;
  };
});
