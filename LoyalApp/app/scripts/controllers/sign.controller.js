(function () {
    'use strict';
 
    angular.module('loyal')
    .controller('signController', signController);
 
    signController.$inject = ['$state'];
    function signController($state) {
        var signctrl = this;
        
        signctrl.user = {
        	firstName:"",
        	lastName:"",
        	username:"",
        	password:"",
            email:""
        };

        signctrl.submit = function () {        	
        	$state.go("user");        	
        	console.log(signctrl.user);
        };



 };
        
})();