//controller for register drugs
pharmacyModuleApp.controller('addDrugsController', function ($scope) {
   var getDrugs = function () {
        $http.get('http://localhost:8000/api/drugs').then(function (response) {
            $scope.drug = response.data;
            console.log( response.data);
        });
    };

    getDrugs();

    //function for add new user
    $scope.addDrugs = function () {
        $http.post('http://localhost:8000/api/drugs', $scope.newDrug).then(function (response) {
            console.log(response.data);
            $scope.newDrug = "";
        });
    };
});