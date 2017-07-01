// create the controller for navbar
pharmacyModuleApp.controller('navbarController', function ($scope,$location) {
    $scope.$watch(function () { return $location.path(); }, function (newValue, oldValue) {

        var pageUrl = $location.path().substring(1);

        var pageTitleItems = {
            '': "Home",
            add_drugs: "Add Drugs",
            update_drugs: "Update Drugs",
            add_batch: "Add Batch",
            reports: "Generate Reports",
            supplier : "Add/Update/Delete Supplier",
            view_requests : "View Requests",
            prescription : "Add Prescriptions"
        };

        $scope.pageTitle = pageTitleItems[pageUrl];
    });

});