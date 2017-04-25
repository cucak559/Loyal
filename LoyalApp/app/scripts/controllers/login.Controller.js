(function () {
    'use strict';
 
    angular.module('loyal')
       .controller('LoginController', LoginController);
 
    LoginController.$inject = ["$state"];
    function LoginController($state) {
        var loginctrl = this;

        loginctrl.user = {
        	username:"",
        	password:""
        };

        
        loginctrl.submit= function () {
        	if ((loginctrl.user.username ==="meno") && (loginctrl.user.password ==="heslo")) {
              		$state.go("admin");
        	}
        	else {
        	$state.go("user");
        	}
        	console.log(loginctrl.user);
        };


 };
        
})();