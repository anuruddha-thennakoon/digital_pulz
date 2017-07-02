//supplier controller
pharmacyModuleApp.controller('prescriptionController', function ($scope, $http) {

    var getPrescription = function () {
        $http.get('http://localhost:8000/api/prescription').then(function (response) {
            $scope.prescription = response.data;
            console.log( response.data);
        });
    };

    getPrescription();

    //function for add new pres
    $scope.addPrescription = function () {
        $http.post('http://localhost:8000/api/prescription', $scope.newPrescription).then(function (response) {
            console.log(response.data);
            $scope.newPrescription = "";
            getPrescription();
        });
    };

});



// $scope.redirect = function(url) {
//     if(refresh || $scope.$$phase) {
//         $window.location.href = url;
//     } else {
//         $location.path(url);
//         $scope.$apply();
//     }
// }