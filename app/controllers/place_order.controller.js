//controller for home
pharmacyModuleApp.controller('orderController', function ($scope,$http) {
    
     var getOrder = function () {
          


        $http.get('http://localhost:8000/api/order').then(function (response) {
            $scope.order = response.data;
            console.log( response.data);
        });

        
     }
    getOrder();


$scope.addOrder = function () {
        $http.post('http://localhost:8000/api/order', $scope.newOrder).then(function (response) {
            console.log(response.data);
            $scope.newOrder = "";
            getOrder();
        });
        var supplier= document.getElementById('sup').value;
    var drname=document.getElementById('dname').value;
    var dtype=document.getElementById('dtype').value;
    var qty=document.getElementById('qty').value;
        var sub = "New Order"
         var addr = document.getElementById('rec').value;
         window.location.href = "mailto:" + $('#rec').val()+"?subject='New Order'&&body="+"Dear %20"+supplier+", %0D%0A I would like to order %20"+qty+" from %20"+drname+" "+dtype;
    };
    

var mail=function()
{
  var addr = document.getElementById('rec').value;
    var sub = "New Order";
    var supplier= document.getElementById('sup').value;
    var drname=document.getElementById('dname').value;
    var dtype=document.getElementById('dtype').value;
    var qty=document.getElementById('qty').value;
    document.location.href = "mailto:" + $('#rec').val();
    
}

    //     $('#stock_display').DataTable( {

            
    //     dom: 'Bfrtip',
    //     buttons: [
    //         'pdfHtml5'
    //     ]
    // } );

     
    
    




    
    
});