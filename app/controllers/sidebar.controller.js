// create the controller for sidebar
pharmacyModuleApp.controller('sidebarController',function ($scope, $location,$http) {

    $scope.isCurrentPath = function (path) {
      return $location.path() == path;
    };
});
