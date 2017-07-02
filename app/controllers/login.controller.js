//controller for login
//const config=require('./app/config/config');


pharmacyModuleApp.controller('loginController', function ($scope, $window, $http, $location,$cookies) {
    $scope.authenticate = function (user) {
        //$location.path('./index.html');
        //$window.location.href='/app/views/index.html';
        console.log("wdgewjhcverj");

        $http.post('http://localhost:8000/api/authenticate', user).then(function (response) {
            console.log(response.data.success);
            if (response.data.success) {
                $cookies.put("userRole", response.data.userRole);
                $cookies.put("logged", "logged");
                //config.userRole=response.data.userRole;
                var a=$cookies.get("userRole");
                console.log('login sucess');
                console.log('Role --->'+a);
                //console.log('role' +config.userRole);
                //$location.path('/logged');
                $window.location.href = '/logged';
            } else {
                console.log('login failed');
            }
        });
    }
});