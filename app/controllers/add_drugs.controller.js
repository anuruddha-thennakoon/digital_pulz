//controller for register drugs
pharmacyModuleApp.controller('addDrugsController', function ($scope,$http) {

   var getDrugs = function () {
        $http.get('http://localhost:8000/api/drugs').then(function (response) {
            $scope.drug = response.data;
            console.log( response.data);
        });
    };

    //getDrugs();

    //function for add new user
    $scope.addDrugs = function (newDrug) {
        $http.post('http://localhost:8000/api/drugs', newDrug).then(function (response) {
            console.log('add drugs function');
            console.log(response.data);
            $scope.newDrug = "";
        });
    };

    $scope.upload=function(){
        $http.post('/upload').then(function (response) {
            console.log('file upload function');
            console.log(response.data);
        });
    };

});