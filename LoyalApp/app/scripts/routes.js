(function() {
"use strict";

 
 angular.module('loyal')
 .config(RoutesConfig);
 
 RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'views/home.html'
  })

  .state('user', {
    url: '/user',
    templateUrl: 'views/user.html',
    controller: 'userController as userctrl'
  })

  .state('admin', {
    url: '/admin',
    templateUrl: 'views/admin.html',
    controller: 'adminController as adminctrl'
  })


  .state('login', {
    url: '/login',
    templateUrl: 'views/login.html',
    controller: 'LoginController as loginctrl'
  })


  .state('sign', {
    url: '/sign',
    templateUrl: 'views/sign.html',
    controller: 'signController as signctrl'
  });

};
  
  
})();
