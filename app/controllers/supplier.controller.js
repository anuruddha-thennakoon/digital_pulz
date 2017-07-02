//supplier controller
pharmacyModuleApp.controller('suppplierController', function ($scope, $http) {

    //function for get all users in db
    var getSuppliers = function () {
        $http.get('http://localhost:8000/api/supplier').then(function (response) {
            $scope.supplier = response.data;
            console.log( response.data);
        });
    };

    getSuppliers();

    //function for add new user
    $scope.addSupplier = function () {
        $http.post('http://localhost:8000/api/supplier', $scope.newSupplier).then(function (response) {
            console.log(response.data);
            $scope.newSupplier = "";
            getSuppliers();
        });
    };
    
    var removeSupplier = function (id) {
        $http.delete('http://localhost:8000/api/supplier/'+ id).then(function (response) {
            $scope.supplier = response.data;
            console.log( response.data);
        });
    };

});