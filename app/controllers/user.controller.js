//controller for user
//this is a sample to study
pharmacyModuleApp.controller('userController', function ($scope, $http) {

    //function for get all users in db
    var getUsers = function () {
        $http.get('/users').then(function (response) {
            $scope.user = response.data;
        });
    };

    getUsers();

    //function for add new user
    $scope.addUser = function () {
        $http.post('/users', $scope.newUser).then(function (response) {
            console.log(response.data);
            $scope.newUser = "";
            getUsers();
        });
    };

});