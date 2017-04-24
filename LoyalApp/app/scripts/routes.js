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

  // Menu page
  .state('menu', {
    url: '/menu',
    templateUrl: 'views/menu.html',
   controller: 'MenuController as menuCtrl',
    resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    
  });

 };
  
})();
