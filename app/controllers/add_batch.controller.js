//controller for add batch
pharmacyModuleApp.controller('addBatchController', function ($scope, $http) {
    var getBatch = function () {
        $http.get('http://localhost:8000/api/batch').then(function (response) {
            $scope.batch = response.data;
            console.log(response.data);
        });
    };

    getBatch();

    //function for add new user
    $scope.addBatch = function (newBatch) {
        $http.post('http://localhost:8000/api/batch', newBatch).then(function (response) {
            console.log('add drugs function');
            console.log(response.data);
            $scope.newBatch = "";
            getBatch();
        });
    };
});