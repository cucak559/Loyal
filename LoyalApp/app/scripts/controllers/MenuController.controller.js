(function () {
'use strict';

angular.module('loyal')
.controller('MenuController',MenuController);

MenuController.$inject = ["menuCategories"];
function MenuController(menuCategories) {
  var menuCtrl = this;
  menuCtrl.items = menuCategories;
}



})();
