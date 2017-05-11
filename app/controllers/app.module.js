//create module
var pharmacyModuleApp = angular.module('pharmacyModuleApp', ['ngRoute']);

// configure our routes
pharmacyModuleApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl: 'app/views/components/home.html',
            controller: 'homeController'
        })
        // route for the register drugs page
        .when('/register_drugs', {
            templateUrl: 'app/views/components/register_drugs.html',
            controller: 'registerDrugsController'
        })
});
