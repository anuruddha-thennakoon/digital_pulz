// create the controller for navbar

pharmacyModuleApp.controller('navbarController', function ($scope,$location) {
    $scope.$watch(function () { return $location.path(); }, function (newValue, oldValue) {

        var pageUrl = $location.path().substring(1);

        var pageTitleItems = {
            home: "Home",
            register_drugs: "Register Drugs",
            editprofile: "Edit Profile"
        };

        $scope.pageTitle = pageTitleItems[pageUrl];
    });

});