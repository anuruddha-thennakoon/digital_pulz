//controller for login
//const config=require('./app/config/config');


pharmacyModuleApp.controller('loginController', function ($scope, $window, $http, $location) {
    $scope.authenticate = function (user) {
        //$location.path('./index.html');
        //$window.location.href='/app/views/index.html';
        console.log("wdgewjhcverj");

        $http.post('http://localhost:8000/api/authenticate', user).then(function (response) {
            console.log(response.data.success);
            if (response.data.success) {
                //config.userRole=response.data.userRole;
                console.log('login sucess');
                //console.log('role' +config.userRole);
                //$location.path('/logged');
                $window.location.href = '/logged';
            } else {
                console.log('login failed');
            }
        });
    }
});