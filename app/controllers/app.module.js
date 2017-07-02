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
        // route for the add drugs
        .when('/add_drugs', {
            templateUrl: 'app/views/components/add_drugs.html',
            controller: ''
        })
        // route for the register drugs page
        .when('/update_drugs', {
            templateUrl: 'app/views/components/update_drugs.html',
            controller: ''
        })
        .when('/add_batch', {
            templateUrl: 'app/views/components/add_batch.html',
            controller: ''
        })
        .when('/supplier', {
            templateUrl: 'app/views/components/add_supplier.html',
            controller: ''
        })
        .when('/reports', {
            templateUrl: 'app/views/components/reports.html',
            controller: ''
        })
        .when('/view_requests', {
            templateUrl: 'app/views/components/view_requests.html',
            controller: ''
        })
        .when('/user', {
            templateUrl: 'app/views/components/user.html',
            controller: ''
        })
        .when('/prescription', {
            templateUrl: 'app/views/components/add_prescriptions.html',
            controller: ''
        })
        .when('/addItems/:id', {
            templateUrl: 'app/views/components/add_items.html',
            controller: ''
        })
        .when('/placeOrder', {
            templateUrl: 'app/views/components/place_order.html',
            controller: ''
        })

});
