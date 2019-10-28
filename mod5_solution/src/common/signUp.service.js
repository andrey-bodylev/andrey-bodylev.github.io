(function () {
"use strict";

angular.module('common')
.service('signUpService', signUpService);


signUpService.$inject = ['$http', 'ApiPath'];
function signUpService($http, ApiPath) {
  var service = this;

  service.submit = function (data) {
    return $http({
      method: "GET",
      url: (ApiPath + '/menu_items/' + data.dish + '.json')
    }).then(function(response) {
      service.user = Object.assign({dish_name : response.data.name,
                                    dish_descr : response.data.description,
                                    dish_url : ApiPath + '/images/' + data.dish},data);
    });
  };

  service.isSigned = function () {
    return !!service.user;
  };

  service.getUser = function () {
    return service.user;
  }

}



})();
