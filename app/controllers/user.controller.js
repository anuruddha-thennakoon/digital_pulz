//controller for user
//this is a sample to study
pharmacyModuleApp.controller('userController', function ($scope, $http) {

    var getUsers = function () {
        $http.get('/users').then(function (response) {
            $scope.user = response.data;
        });
    };

    getUsers();

    $scope.addUser = function () {
        var dataObj = {
				'firstName' : $scope.firstName,
				'lastName' : $scope.lastName,
				'date' : '2017-06-02'
		};

        console.log(dataObj);
        $http.post('/users', dataObj).then(function (response) {
            console.log(response.data);
            $scope.newUser = "";
            getUsers();
        });
    };

});