(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesMainController', CategoriesMainController);

CategoriesMainController.$inject = ['items'];
function CategoriesMainController(items) {
  var $ctrl = this;
  $ctrl.items = items;
}

})();
