//supplier controller
pharmacyModuleApp.controller('suppplierController', function ($scope, $http) {

    //function for get all users in db
    var getSuppliers = function () {

        var req = {
            method: 'GET',
            url: 'http://localhost:8000/api/supplier/',
            header: {
                token : undefined
            }
            
        }


        $http(req).then(function (response) {
            $scope.supplier = response.data;
        });
    };
    // var getSuppliers = function () {
    //     $http.get('/suppliers').then(function (response) {
    //         $scope.supplier = response.data;
    //     });
    // };

    getSuppliers();

    //function for add new user
    $scope.addSupplier = function () {
        var req = {
            method: 'POST',
            url: 'http://localhost:8000/api/supplier/'
            
        }
        $http(req, $scope.newSupplier).then(function (response) {
            console.log(response.data);
            $scope.newSupplier = "";
        });
    };
    

});