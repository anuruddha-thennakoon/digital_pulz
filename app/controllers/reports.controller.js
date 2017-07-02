pharmacyModuleApp.controller('reportsController', function ($scope, $http) {

    //function for get all users in db
    var getDangerReport = function () {
        $http.get('http://localhost:8000/api/stock/danger').then(function (response) {
            $scope.stock = response.data;
            console.log(response.data);
        });
    };

    getDangerReport();


    var getOrderReport = function () {
        $http.get('http://localhost:8000/api/stock/reorder').then(function (response) {
            $scope.reorder = response.data;
            console.log(response.data);
        });
    };

    getOrderReport();

    $('.btn-pdf').click(function () {
        var doc = new jsPDF('p', 'pt');
        var elem = document.getElementById("stock_display");
        var res = doc.autoTableHtmlToJson(elem);
        doc.autoTable(res.columns, res.data);
        doc.save("table.pdf");
    });

});