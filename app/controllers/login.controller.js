pharmacyModuleApp.controller('loginController', function ($scope, $window, $http, $location,$cookies) {
    $scope.authenticate = function (user) {
        $http.post('http://localhost:8000/api/authenticate', user).then(function (response) {
            console.log(response.data.success);
            if (response.data.success) {
                $cookies.put("userRole", response.data.userRole);
                $cookies.put("logged", "logged");
                var a=$cookies.get("userRole");
                $window.location.href = '/logged';
            } else {
                console.log('login failed');
            }
        });
    }
});
