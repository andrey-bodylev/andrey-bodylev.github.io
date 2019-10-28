(function () {
"use strict";

angular.module('public')
.controller('myInfoController', myInfoController);

  myInfoController.$inject = ['signUpService'];
function myInfoController(signUpService) {
  var mIctrl = this;

  mIctrl.getUser = function () {
    return signUpService.getUser();
  };

  mIctrl.isSigned = function () {
    return signUpService.isSigned();
  };

}


})();
