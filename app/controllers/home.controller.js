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




    //     $('#stock_display').DataTable( {

            
    //     dom: 'Bfrtip',
    //     buttons: [
    //         'pdfHtml5'
    //     ]
    // } );

     
    
    




    
    
});