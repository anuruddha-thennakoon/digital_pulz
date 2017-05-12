// create the controller for navbar

pharmacyModuleApp.controller('navbarController', function ($scope,$location) {
    $scope.$watch(function () { return $location.path(); }, function (newValue, oldValue) {

        var pageUrl = $location.path().substring(1);

        var pageTitleItems = {
            '': "Home",
            register_drugs: "Register Drugs",
            editprofile: "Edit Profile",
            reports: "Generate Reports",
            add_supplier : "Add Supplier",
            view_requests : "View Requests"

        };

        $scope.pageTitle = pageTitleItems[pageUrl];
    });

});