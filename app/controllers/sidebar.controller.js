// create the controller for sidebar

pharmacyModuleApp.controller('sidebarController', ['$scope', '$location', function ($scope, $location) {
    $scope.model = {};
    $scope.model.data = {
      "userRole": "chief"
      };
    
    $scope.isCurrentPath = function (path) {
      return $location.path() == path;
    };
}]);