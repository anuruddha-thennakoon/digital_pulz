//controller for home
pharmacyModuleApp.controller('homeController', function ($scope) {
    
        $('#stock_display').DataTable( {
        dom: 'Bfrtip',
        buttons: [
            'pdfHtml5'
        ]
    } );

    
    
});