// create the controller for sidebar

pharmacyModuleApp.controller('sidebarController', ['$scope', '$location', function ($scope, $location) {
    $scope.isCurrentPath = function (path) {
      return $location.path() == path;
    };
}]);