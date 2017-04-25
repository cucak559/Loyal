(function () {
    'use strict';
 
    angular.module('loyal')
    .controller('signController', signController);
 
    //signController.$inject = [''];
    function signController() {
        var signctrl = this;
        
        signctrl.user = {
        	firstName:"",
        	lastName:"",
        	username:"",
        	password:""
        };

        signctrl.submit = function () {
        	console.log(signctrl.user);
        };



 };
        
})();