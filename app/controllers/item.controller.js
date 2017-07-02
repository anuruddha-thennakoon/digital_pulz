pharmacyModuleApp.controller('itemController', function ($scope, $http, $routeParams) {

    var findItem = function () {
        $http.get('http://localhost:8000/api/item').then(function (response) {
            $scope.prescriptionItem = response.data;
            console.log( response.data);
        });
    };

    findItem();

    //function for add new user
    $scope.addItem = function () {
        $http.post('http://localhost:8000/api/item'+ id, $scope.newItem).then(function (response) {
            console.log(response.data);
            $scope.newItem = "";
            findItem();
        });
    };

});
