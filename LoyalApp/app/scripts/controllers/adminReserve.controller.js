(function () {
    'use strict';
 
    angular.module('loyal')
       .controller('adminReserveController', adminReserveController);
 
    //adminReserveController.$inject = [];
    function adminReserveController() {
        var adminReservectrl = this;

      adminReservectrl.reserve= {
        userName:"",
        gymName:"",
        email:"",
        date:"",
        time:""
       };

      var storage=[];

       adminReservectrl.submit= function () {         
         console.log(adminReservectrl.reserve);
         storage.push(adminReservectrl.reserve);         
         console.log(storage);

       }

  };


        
})();