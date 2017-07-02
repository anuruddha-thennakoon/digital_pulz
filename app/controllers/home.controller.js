//controller for home
pharmacyModuleApp.controller('homeController', function ($scope,$http) {
    
     var getStock = function () {
          


        $http.get('http://localhost:8000/api/stock').then(function (response) {
            $scope.stock = response.data;
            console.log( response.data);
            
        });
        
        
     }

    getStock();


var getDanger = function () {
          


        $http.get('http://localhost:8000/api/stock/danger').then(function (response) {
            $scope.danger = response.data;
            console.log( response.data);
        });

        
     }
    getDanger();



$('.btn-pdf').click(function(){
    var doc = new jsPDF('p', 'pt');
var elem = document.getElementById("stock_display");
var res = doc.autoTableHtmlToJson(elem);
doc.autoTable(res.columns, res.data);
doc.save("table.pdf");
});
    




    
    
});