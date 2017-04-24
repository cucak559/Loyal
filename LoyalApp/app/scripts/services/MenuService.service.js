(function () {
"use strict";

angular.module('loyal')
.service('MenuService', MenuService)
.constant('ApiPath',"http://localhost:3000/items");


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath).then(function (response) {
      return response.data;
    });
  };
 

}



})();
