(function () {
"use strict";

angular.module('public')
.controller('signUpController', signUpController);

  signUpController.$inject = ['signUpService'];
function signUpController(signUpService) {
  var sUctrl = this;

  sUctrl.submit = function () {
    signUpService.submit(sUctrl.user).then(function () {
      sUctrl.success = true;
    }).catch(function () {
      sUctrl.success = false;
    });
  };
}


})();
