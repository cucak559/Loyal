(function () {
    'use strict';
 
    angular.module('loyal')
       .controller('adminGymController', adminGymController);
 
    //adminGymController.$inject = [];
    function adminGymController() {
        var adminGymctrl = this;

       adminGymctrl.gym= {
        name:""
       };

       adminGymctrl.submit= function () {
         console.log(adminGymctrl.gym);
       }

  };


        
})();