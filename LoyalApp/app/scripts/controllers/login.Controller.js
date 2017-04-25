(function () {
    'use strict';
 
    angular.module('loyal')
       .controller('LoginController', LoginController);
 
    //LoginController.$inject = [];
    function LoginController() {
        var loginctrl = this;

        loginctrl.user = {
        	username:"",
        	password:""
        };

        loginctrl.submit= function () {
        	console.log(loginctrl.user);
        };


 };
        
})();